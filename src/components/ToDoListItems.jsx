import React from "react";
import CheckCircleRoundedIcon from "@mui/icons-material/CheckCircleRounded";
import DeleteIcon from "@mui/icons-material/Delete";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";
const ToDoListItems = ({ text, id, isComplete, deleteToDo, Toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      <div
        className="flex flex-1 items-center cursor-pointer"
        onClick={() => {
          Toggle(id);
        }}
      >
        {isComplete ? (
          <CheckCircleRoundedIcon fontSize="large" color="success" />
        ) : (
          <PanoramaFishEyeIcon fontSize="large" color="disabled" />
        )}
        <p
          className={`ml-4 text-[17px] ${
            isComplete ? "text-gray-500 line-through" : "text-slate-700"
          }`}
        >
          {text}
        </p>
      </div>
      <div>
        <DeleteIcon
          onClick={() => deleteToDo(id)}
          fontSize="medium"
          className="cursor-pointer text-red-500 hover:text-red-700"
        />
      </div>
    </div>
  );
};

export default ToDoListItems;
