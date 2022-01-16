import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useForm } from "react-hook-form";

interface FormData {
  searchKeyword: string;
}
function SearchArticle() {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = () => {};
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register("searchKeyword")}
        type="text"
        placeholder="Search news"
      />
      <button>
        <SearchOutlined />
      </button>
    </form>
  );
}

export default SearchArticle;
