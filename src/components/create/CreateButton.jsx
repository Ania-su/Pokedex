import { useState } from "react";
import { Button, Tooltip } from "@mui/material";
import { MdCreate } from "react-icons/md";
import CreateModal from "./CreateModal";

export const CreateButton = (props) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      {isOpenModal && <CreateModal open={isOpenModal} onClose={() => setIsOpenModal(false)} />}

      <div
        style={{
            position: "fixed",
            bottom: "2rem",
            left: "2rem",
            zIndex: 40,
        }}
      >
        <Tooltip title="Create your own pokemon" placement="left" arrow>
          <Button
            onClick={() => setIsOpenModal(!isOpenModal)}
            {...props}
            sx={{
              borderRadius: "50%",
              minWidth: 56,
              minHeight: 56,
              boxShadow: 3,
            }}
            color="primary"
            variant="contained"
          >
            <MdCreate size={28} />
          </Button>
        </Tooltip>
      </div>
    </>
  );
};
