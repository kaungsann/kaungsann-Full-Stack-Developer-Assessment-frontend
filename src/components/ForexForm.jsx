import PropTypes from "prop-types";
import HeaderBox from "./HeaderBox";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import CustomInput from "./CustomInput";

import CustomButton from "./CustomButton";
import { ArrowBigRightDash } from "lucide-react";
import {
  useAddForexMutation,
  useUpdateForexMutation,
  useDeleteForexMutation,
  useGetForexByIdQuery,
} from "../services/forexApi";
import { toast } from "sonner";
import { useEffect } from "react";

const ForexForm = ({ mode }) => {
  const { id } = useParams();
  const navigateTo = useNavigate();

  const [addForex, { isLoading: isUpdating, error: updateError }] =
    useAddForexMutation();
  const [updateForex, { isLoading: isInserting, error: insertError }] =
    useUpdateForexMutation();
  const [deleteForex, { isLoading: isDeleting, error: deleteError }] =
    useDeleteForexMutation();

  const { data: forexData, isLoading: isUserIdLoading } = useGetForexByIdQuery(
    id,
    {
      skip: !id,
    }
  );
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    switch (mode) {
      case "Create": {
        addForex(data)
          .unwrap()
          .then(() => {
            navigateTo("/trading/list");
            toast.success("Forex Created Successfully 👏");
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      }
      case "Edit": {
        delete data.id;
        delete data.createdAt;
        delete data.updatedAt;
        updateForex({ id, ...data })
          .unwrap()
          .then(() => {
            navigateTo("/trading/list");
            toast.success("Forex Updated Successfully 👏");
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      }
      case "Delete": {
        deleteForex(id)
          .unwrap()
          .then(() => {
            navigateTo("/trading/list");
            toast.success("Forex Deleted");
          })
          .catch((err) => {
            console.log(err);
          });
        break;
      }
    }
  };

  if (insertError) {
    toast.error(insertError.data?.message || "Failed to add forex");
  }
  if (updateError) {
    toast.error(updateError.data?.message || "Failed to update forex");
  }
  if (deleteError) {
    toast.error(deleteError.data?.message || "Failed to delete forex");
  }

  // Combine loading states into a single isLoading variable
  const isLoading = isInserting || isUpdating || isDeleting || isUserIdLoading;

  useEffect(() => {
    if (forexData) {
      reset(forexData);
    }
  }, [forexData, reset]);

  return (
    <div className="p-4">
      <HeaderBox />

      <div className="flex flex-col items-center justify-center mt-20">
        <div className="text-xl font-semibold my-4 flex items-center justify-center">
          <span>Forex Form</span>
          <ArrowBigRightDash className="mx-4 text-[#6366f1]" />
          <span>{mode}</span>
        </div>
        <form className="w-[400px]" onSubmit={handleSubmit(onSubmit)}>
          <CustomInput
            name="pair"
            label="Pair"
            placeholder="enter pair name"
            className="w-full my-12"
            // value={userData?.username}
            register={register}
            error={errors.username}
          />
          <CustomInput
            type="number"
            name="price"
            label="Price"
            placeholder="enter a price"
            className="w-full mb-12"
            register={register}
            // value={userData?.email}
            error={errors.email}
          />

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

ForexForm.propTypes = {
  mode: PropTypes.string,
};

export default ForexForm;
