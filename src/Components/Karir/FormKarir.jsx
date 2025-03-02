import React from "react";
import { useForm } from "react-hook-form";

export default function FormKarir() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <form
      action=""
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-2 mt-4"
    >
      <div className="w-full flex max-md:flex-col justify-between gap-5 ">
        <section className="w-full space-y-1.5">
          <label htmlFor="nama" className="block max-md:text-sm">
            Nama Lengkap
          </label>
          <input
            type="text"
            {...register("nama", {
              required: {
                value: true,
                message: "Masukan Nama terlebih dahulu",
              },
            })}
            placeholder="Masukan Nama Lengkap"
            className={`border rounded py-1 px-2  w-full max-md:text-sm  ${
              errors.nama
                ? "border-red-500 ring-offset-amber-500 outline-red-500"
                : "border-slate-400"
            }`}
          />
          {errors.nama && (
            <p className="text-xs text-red-500">{errors.nama.message}</p>
          )}
        </section>
        <section className="w-full space-y-1.5">
          <label htmlFor="email" className="block max-md:text-sm">
            Email
          </label>
          <input
            type="email"
            {...register("email", {
              required: { value: true, message: "Masukan email" },
            })}
            placeholder="Masukan Email"
            className={`border rounded py-1 px-2  w-full max-md:text-sm ${
              errors.email
                ? "border-red-500 ring-offset-amber-500 outline-red-500"
                : "border-slate-400"
            }`}
          />
          {errors.email && (
            <p className="text-xs text-red-500">{errors.email.message}</p>
          )}
        </section>
      </div>
      <section className="w-full space-y-1.5">
        <label htmlFor="notelp" className="block max-md:text-sm ">
          No Telepon
        </label>
        <input
          {...register("notelp", {
            required: { value: true, message: "Masukan no telepon" },
          })}
          type="text"
          id="notelp"
          placeholder="Masukan Nomor Telepon"
          className={`border rounded py-1 px-2  w-full max-md:text-sm ${
            errors.notelp
              ? "border-red-500 ring-offset-amber-500 outline-red-500"
              : "border-slate-400"
          }`}
        />
        {errors.notelp && (
          <p className="text-xs text-red-500">{errors.notelp.message}</p>
        )}
      </section>
      <section className="w-full space-y-1.5">
        <label htmlFor="alamat" className="block max-md:text-sm">
          Alamat
        </label>
        <textarea
          {...register("alamat", {
            required: { value: true, message: "Masukan alamat anda" },
          })}
          id="alamat"
          placeholder="Masukan Alamat"
          className={`border rounded py-1 px-2  w-full max-md:text-sm ${
            errors.alamat
              ? "border-red-500 ring-offset-amber-500 outline-red-500"
              : "border-slate-400"
          }`}
        ></textarea>
        {errors.alamat && (
          <p className="text-xs text-red-500">{errors.alamat.message}</p>
        )}
      </section>
      <section className="w-full space-y-1.5">
        <label htmlFor="notelp" className="block max-md:text-sm">
          Masukkan File Lamaran kerja
        </label>
        <input
          {...register("lamaran", {
            required: { value: true, message: "Masukan lamaran anda" },
          })}
          class={`block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 max-md:text-xs
            ${
              errors.lamaran
                ? "border-red-500 ring-offset-amber-500 outline-red-500"
                : "border-slate-400"
            }
            `}
          id="file_input"
          type="file"
        />
        {errors.lamaran && (
          <p className="text-xs text-red-500">{errors.lamaran.message}</p>
        )}
      </section>
      <section className="w-full flex justify-center items-center mt-5">
        <button
          type="submit"
          className="bg-yellow-500 hover:cursor-pointer max-md:text-sm hover:bg-yellow-600 py-2 px-5 rounded text-white"
        >
          Submit
        </button>
      </section>
    </form>
  );
}
