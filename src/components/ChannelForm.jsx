import PropTypes from "prop-types";
import HeaderBox from "./HeaderBox";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import CustomInput from "./CustomInput";
import CustomSelection from "./CustomSelection";
import { useGetUsersQuery } from "../services/userApi";
import CustomButton from "./CustomButton";
import { ArrowBigRightDash } from "lucide-react";

import { toast } from "sonner";

const ChannelForm = ({ mode }) => {
  const { id } = useParams();
  const navigateTo = useNavigate();
  // const {
  //   data: usersData,
  //   isLoading: isUsersLoading,
  //   error: usersError,
  // } = useGetUsersQuery();

  // const [addChannel, { isLoading: isUpdating, error: updateError }] =
  //   useAddChannelMutation();
  // const [updateChannel, { isLoading: isInserting, error: insertError }] =
  //   useUpdateChannelMutation();
  // const [deleteChannel, { isLoading: isDeleting, error: deleteError }] =
  //   useDeleteChannelMutation();

  // const { data: userById, isLoading: isUserIdLoading } = useGetUserByIdQuery(
  //   id,
  //   {
  //     skip: !id,
  //   }
  // );
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    switch (mode) {
      case "Create": {
        addChannel(data)
          .unwrap()
          .then(() => {
            navigateTo("/channels/list");
            toast.success("Channel Created Successfully 👏");
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      }
      case "Edit": {
        delete data.createdAt;
        delete data.updatedAt;
        updateChannel(data)
          .unwrap()
          .then(() => {
            navigateTo("/channels/list");
            toast.success("Channel Updated Successfully 👏");
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      }
      case "Delete": {
        deleteChannel(data.id)
          .unwrap()
          .then(() => {
            navigateTo("/channels/list");
            toast.success("Channel Deleted");
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      }
    }
  };

  // if (usersError) {
  //   toast.error(usersError.data?.message || "Failed to add channel");
  // }
  // if (insertError) {
  //   toast.error(insertError.data?.message || "Failed to add channel");
  // }
  // if (updateError) {
  //   toast.error(updateError.data?.message || "Failed to update channel");
  // }
  // if (deleteError) {
  //   toast.error(deleteError.data?.message || "Failed to delete channel");
  // }
  return (
    <div className="p-4">
      <HeaderBox />

      <div className="flex flex-col items-center justify-center mt-20">
        <div className="text-xl font-semibold my-4 flex items-center justify-center">
          <span>Channel Form</span>
          <ArrowBigRightDash className="mx-4 text-[#6366f1]" />
          <span>{mode}</span>
        </div>

        {/* onSubmit={handleSubmit(onSubmit)}? */}
        <form className="w-[400px]">
          <CustomInput
            name="name"
            label="Name"
            placeholder="enter the channel name"
            className="w-full my-12"
            register={register}
            error={errors.name}
          />
          <CustomSelection
            // options={usersData?.results}
            onChange={(v) => setValue("created_by", v)}
            //  isLoading={isUsersLoading}
            // defaultValue={selectedUser}
            disabled={mode === "View" ? true : false}
            label="Create By"
          />
          <CustomSelection
            options={[true, false]}
            onChange={(v) => setValue("isPrivate", v)}
            // isLoading={isUsersLoading}
            // defaultValue={selectedUser}
            disabled={mode === "View" ? true : false}
            label="Is Private"
          />

          <CustomButton
            variant="solid"
            name={mode}
            className="w-full mt-6 mb-6 p-6 b bg-[#6366f1] text-white"
            // loading={isUsersLoading}
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

ChannelForm.propTypes = {
  mode: PropTypes.string,
};

export default ChannelForm;
