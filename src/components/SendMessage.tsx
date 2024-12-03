import { BiMailSend } from "react-icons/bi";
import { TailwindButton } from "./ui/TailwindButton";
import { motion } from "framer-motion";
import { ChangeEvent, FormEvent, useState, useTransition } from "react";
import sendMessageToEmail from "@/lib/mail";
const SendMessage = () => {
  const [messageInfo, setMessage] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setTransition] = useTransition();
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const handleMessage = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setMessage((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const sendMessage = async (event: FormEvent) => {
    event.preventDefault();
    setSuccess("");
    setError("");
    if (loading) return;
    setTransition(() => {
      sendMessageToEmail(messageInfo).then((res: any) => {
        setSuccess(res.successMsg);
        setError(res.errMsg);
      });
    });
  };
  return (
    <section
      id="message"
      className="pb-28 flex flex-col md:flex-row
     items-center justify-center md:items-start gap-3 p-4"
    >
      {" "}
      <div
        className="text-center md:text-left w-full max-w-[400px]
        space-y-3 flex flex-col items-center md:items-start"
      >
        <h3 className="font-bold text-balance text-5xl mt-10 relative">
          Excited to collaborate?{" "}
          <motion.span
            initial={{
              y: 0,
              bottom: 7,
              //  rotate: "-20deg",
            }}
            animate={{
              y: [-6, 0, -6],
              // x: [-6, 0, -6],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
            className="absolute"
          >
            🚀
          </motion.span>
        </h3>
        <p className="text-[14px] text-muted-foreground max-w-[350px]">
          Got a project or an idea? Let's bring it to life, feel free to drop me
          a message.
        </p>
      </div>
      <form
        onSubmit={sendMessage}
        className="w-full max-w-[400px] py-3
        space-y-4 rounded"
      >
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="name" className="text-[14px]">
            Name
          </label>
          <input
            onChange={handleMessage}
            id="name"
            type="text"
            className="bg-slate-50/15 p-2 rounded border
            border-blue-50/20"
            placeholder="Enter your name"
          />
        </div>
        {/*  */}
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="email" className="text-[14px]">
            Email
          </label>
          <input
            onChange={handleMessage}
            required
            id="email"
            type="email"
            className="bg-slate-50/15 p-2 rounded border
            border-blue-50/20"
            placeholder="Enter your email"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
          <label htmlFor="message" className="text-[14px]">
            Message
          </label>
          <textarea
            onChange={handleMessage}
            id="message"
            className="bg-slate-50/15 p-2 rounded border
            border-blue-50/20 min-h-[200px]
            max-h-[200px]"
            placeholder="Enter your message"
          />
        </div>
        {error && (
          <div
            className="bg-red-500/10 text-red-500 p-2 px-4
           rounded text-[14px]"
          >
            {error + "jjjjjjj"}
          </div>
        )}
        {success && (
          <div
            className="bg-emerald-500/10 text-emerald-500 p-2 px-4
           rounded text-[14px]"
          >
            {success}
          </div>
        )}

        <TailwindButton
          title={loading ? "Sending..." : "Send Message"}
          otherClasses="flex justify-center py-2"
          otherBtnClasses={`max-w-[170px] text-[15px] ${
            loading && "opacity-[0.8]"
          }`}
          type="submit"
          icon={<BiMailSend className="text-[18px]" />}
          postion="right"
        />
      </form>
    </section>
  );
};

export default SendMessage;
