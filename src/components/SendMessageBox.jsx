import { Button, Input } from "@nextui-org/react";
import { Send } from "lucide-react";

const SendMessageBox = () => {
  return (
    <>
      <div className="p-4 mb-4 flex">
        <Input className="max-w-4/5" />

        <Button variant="faded" className="mx-6">
          <Send className="text-[#6366f1]" /> send
        </Button>
      </div>
    </>
  );
};

export default SendMessageBox;
