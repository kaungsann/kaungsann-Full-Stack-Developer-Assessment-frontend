import PropTypes from "prop-types";
import HeaderBox from "./HeaderBox";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import CustomInput from "./CustomInput";
import CustomSelection from "./CustomSelection";

import CustomButton from "./CustomButton";
import { ArrowBigRightDash } from "lucide-react";
import {
  useAddUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
  useGetUserByIdQuery,
} from "../services/userApi";
import { toast } from "sonner";
import { useEffect } from "react";
import { Select, SelectItem } from "@nextui-org/react";

const UserForm = ({ mode }) => {
  const { id } = useParams();
  const navigateTo = useNavigate();

  const [addUser, { isLoading: isUpdating, error: updateError }] =
    useAddUserMutation();
  const [updateUser, { isLoading: isInserting, error: insertError }] =
    useUpdateUserMutation();
  const [deleteUser, { isLoading: isDeleting, error: deleteError }] =
    useDeleteUserMutation();

  const { data: userData, isLoading: isUserIdLoading } = useGetUserByIdQuery(
    id,
    {
      skip: !id,
    }
  );
  console.log("user by id ", userData);
  const {
    register,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("add user is", data);
    switch (mode) {
      case "Create": {
        addUser(data)
          .unwrap()
          .then(() => {
            navigateTo("/users/list");
            toast.success("User Created Successfully 👏");
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      }
      case "Edit": {
        delete data.createdAt;
        delete data.updatedAt;
        updateUser({ ...data, id })
          .unwrap()
          .then(() => {
            navigateTo("/users/list");
            toast.success("User Updated Successfully 👏");
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      }
      case "Delete": {
        deleteUser(id)
          .unwrap()
          .then(() => {
            navigateTo("/users/list");
            toast.success("User Deleted");
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      }
    }
  };

  if (insertError) {
    toast.error(insertError.data?.message || "Failed to add channel");
  }
  if (updateError) {
    toast.error(updateError.data?.message || "Failed to update channel");
  }
  if (deleteError) {
    toast.error(deleteError.data?.message || "Failed to delete channel");
  }

  // Combine loading states into a single isLoading variable
  const isLoading = isInserting || isUpdating || isDeleting || isUserIdLoading;

  useEffect(() => {
    if (userData) {
      reset(userData);
    }
  }, [userData, reset]);

  return (
    <div className="p-4">
      <HeaderBox />

      <div className="flex flex-col items-center justify-center mt-20">
        <div className="text-xl font-semibold my-4 flex items-center justify-center">
          <span>User Form</span>
          <ArrowBigRightDash className="mx-4 text-[#6366f1]" />
          <span>{mode}</span>
        </div>
        <form className="w-[400px]" onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            name="username"
            label="UserName"
            placeholder="enter username"
            className="w-full my-12"
            // value={userData?.username}
            register={register}
            error={errors.username}
          />
          <CustomInput
            name="email"
            label="Email"
            placeholder="example@gmail.com"
            className="w-full mb-12"
            register={register}
            // value={userData?.email}
            error={errors.email}
          />

          <Select
            name="status"
            id="status"
            variant="bordered"
            label="Role"
            labelPlacement="outside"
            //  selectedKeys={selectedStatus ? [selectedStatus] : ["created"]}
            placeholder="select role"
            size="md"
            classNames={{
              base: "w-full",
              trigger: "h-12 rounded-md mb-8",
            }}
            onChange={(e) => setValue("role", e.target.value)}
            aria-label="Select status"
          >
            <SelectItem key="guest" value="guest">
              guest
            </SelectItem>
            <SelectItem key="trader" value="trader">
              trader
            </SelectItem>
            <SelectItem key="admin" value="admin">
              admin
            </SelectItem>
          </Select>

          {mode !== "Edit" && (
            <CustomInput
              name="password"
              label="Password"
              placeholder="****"
              className="w-full mb-12"
              register={register}
              error={errors.password}
            />
          )}

          <CustomButton
            variant="solid"
            name={mode}
            className="w-full mt-6 mb-6 p-6 b bg-[#6366f1] text-white"
            loading={isLoading}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

UserForm.propTypes = {
  mode: PropTypes.string,
};

export default UserForm;
