import { FetchGetRequestByRequestId } from "@shared/components/FetchList/FetchList";
import { DialogForm } from "@shared/components/Popup/Popup";
import { DialogContent } from "@mui/material";
import { MouseEventHandler, useState } from "react";
import { PostRequest } from "../Info/GetPostRequest";
import { RequestRoom } from "@app/RoomType";

export function PostRequestDialog({
  requestDialogShow,
  onChange,
  requestKey,
}: {
  requestDialogShow: boolean;
  onChange: MouseEventHandler<HTMLButtonElement>;
  requestKey: string[];
}) {
  const [requestInfo, setRequestInfo] = useState<RequestRoom[]>([]);

  FetchGetRequestByRequestId(requestKey, setRequestInfo);
  return (
    <DialogForm
      openState={requestDialogShow}
      handleClose={onChange}
      name="requestDialogShow"
      render={() => (
        <label
          htmlFor="test"
          className="block mb-2 text-sm font-medium text-gray-900 float-left"
        >
          test
        </label>
      )}
    >
      <DialogContent sx={{ width: 512 }} className="text-left">
        <PostRequest requestInfo={requestInfo} />
      </DialogContent>
    </DialogForm>
  );
}
