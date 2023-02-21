import { useState } from "react";
import "tachyons";

export const Accordion = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(true);
  return (
    <>
      <h2>FAQ</h2>
      <div>
        <div onClick={() => setOpen(!open)} className="pa8">
          Pitanje 1
        </div>
        {open && (
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            illum, maiores obcaecati neque iure id ut totam repudiandae
            exercitationem nam dignissimos veritatis explicabo reprehenderit
            dolorem quis pariatur vel blanditiis ex.
          </div>
        )}
      </div>
      <div>
        <div onClick={() => setOpen1(!open1)} className="pa8">
          Pitanje 2
        </div>
        {open1 && (
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            illum, maiores obcaecati neque iure id ut totam repudiandae
            exercitationem nam dignissimos veritatis explicabo reprehenderit
            dolorem quis pariatur vel blanditiis ex.
          </div>
        )}
      </div>
      <div>
        <div onClick={() => setOpen2(!open2)} className="pa8">
          Pitanje 3
        </div>
        {open2 && (
          <div>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus
            illum, maiores obcaecati neque iure id ut totam repudiandae
            exercitationem nam dignissimos veritatis explicabo reprehenderit
            dolorem quis pariatur vel blanditiis ex.
          </div>
        )}
      </div>
    </>
  );
};
