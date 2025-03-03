import React from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { uploadPdf } from "../../utils/UploadPdf";
import { toast } from "react-toastify";
export default function FormKarir({ title = "" }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const file = await data.lamaran[0];
    if (file) {
      try {
        const response = await uploadPdf(file);

        const emailData = {
          from_title: title,
          from_name: data.nama,
          from_email: data.email,
          message: `Nama: ${data.nama}\nEmail: ${data.email}\nNo. Telepon: ${data.notelp}\nAlamat: ${data.alamat}`,
          from_file: response.secure_url,
        };
        emailjs
          .send(
            import.meta.env.VITE_SERVICE_ID,
            import.meta.env.VITE_TEMPLATE_ID,
            emailData,
            import.meta.env.VITE_PUBLIC_KEY
          )
          .then(() => {
            reset();
            toast.success("Email berhasil dikirim!");
          })
          .catch((error) => {
            reset();
            toast.error("Gagal mengirim email");
          });
      } catch (error) {
        toast.error("Gagal mengirim email");
      }
    }
  };

  return (
    <form
      action=""
      encType="multipart/form-data"
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
          type="number"
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

            validate: {
              checkAvailability: async (fileList) => {
                const validateFiles = ["pdf", "docx"];
                const fileExtension = fileList[0].name.split(".").pop();
                if (!validateFiles.includes(fileExtension))
                  return "Invalid file type (pdf, docx)";
                if (fileList[0].size >= 5000000) return "File too large";
              },
            },
          })}
          className={`block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 max-md:text-xs
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
