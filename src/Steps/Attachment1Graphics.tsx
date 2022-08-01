import React, { useContext } from "react";
import { Form } from "react-bootstrap";
import { globalContext } from "../stateManagement/GlobalStore";

export const Attachment1Graphics = () => {
  const { globalState, dispatch } = useContext(globalContext);

  const guidelines = [
    {
      Title: "Encapsulated Post Script (EPS)",
      ID: "graphics_eps",
      Descriptions: [
        "Raster based images will not be saved as EPS but will be saved as TIFF images",
        "EPS files shall not be a mix of vector and raster images.  Vector based images shall be saved as EPS",
        "Vector based images saved as EPS will include illustrations containing both vector and raster images",
        "Any source data (photos used for tracing etc.); used in aiding of creation of EPS (templates, etc.) will be deleted from illustration prior to saving/exporting",
        "If multiple layers are used, then image is to be flattened into 1 single layer before exporting to minimize file size and reduce possible printing issues",
      ],
      Checked:
        globalState.wizardOptions[globalState.tmcrIndex].graphics_eps || false,
    },
    {
      Title: "Tagged Image File Format (TIFF)",
      ID: "graphics_tiff",
      Descriptions: [
        "Black and white raster images should only be saved as Bitmap and not Grayscale, RGB or CMYK",
        "Grayscale or Color images (screenshots, etc.) will be saved as such (Grayscale, RGB or CMYK) and will not be bitmap converted using a halftone screen",
        "To further aid in file size reduction for storage purposes, images should be compressed using Group 4 compression when saving/exporting",
      ],
      Checked:
        globalState.wizardOptions[globalState.tmcrIndex].graphics_tiff || false,
    },
    {
      Title: "Computer Graphics Metafile (CGM)",
      ID: "graphics_cgm",
      Descriptions: [
        "Raster based images will not be saved as CGM",
        "Any source data used in aiding of creation of CGM (templates, etc.) will be deleted from illustration prior to saving/exporting",
        "CGM files shall not be a mix of vector and raster images.  Vector only",
        "If multiple layers are used, then image is to be flattened into 1 single layer before exporting to minimize file size and reduce possible printing issues",
        "Unless Version 4 is specifically required for hotspots and/or hyper linking, CGMs should be exported as version 3 to increase cross platform compatibility",
      ],
      Checked:
        globalState.wizardOptions[globalState.tmcrIndex].graphics_cgm || false,
    },
    {
      Title: "DWG File Format",
      ID: "graphics_dwg",
      Descriptions: [
        "Raster based images will not be saved as DWG",
        "DWG files shall not be a mix of vector and raster images. Vector only",
        "Any source data used in aiding of creation of DWG (templates, etc.) will be deleted from illustration prior to saving/exporting",
        "If multiple layers are used, then image is to be flattened into 1 single layer before exporting to minimize file size and reduce possible printing issues",
      ],
      Checked:
        globalState.wizardOptions[globalState.tmcrIndex].graphics_dwg || false,
    },
    {
      Title: "Joint Photographic Expert Group (JPEG)",
      ID: "graphics_jpg",
      Descriptions: [
        "JPEG File format should be used as last resort.  Color screenshots/photos should be saved as TIFFs due to possible system compatibility issues",
        "B&W Bitmaps should not be saved as JPEGs",
      ],
      Checked:
        globalState.wizardOptions[globalState.tmcrIndex].graphics_jpg || false,
    },
    {
      Title: "Portable Network Graphics (PNG)",
      ID: "graphics_png",
      Descriptions: [
        "Used for raster graphics",
        "Supports lossless data compression",
      ],
      Checked:
        globalState.wizardOptions[globalState.tmcrIndex].graphics_png || false,
    },
    {
      Title: "Bitmap (BMP)",
      ID: "graphics_bmp",
      Descriptions: ["Used for raster graphics"],
      Checked:
        globalState.wizardOptions[globalState.tmcrIndex].graphics_bmp || false,
    },
    {
      Title: "Scalable Vector Graphics (SVG)",
      ID: "graphics_svg",
      Descriptions: ["Two-dimensional vector and mixed vector/raster graphics"],
      Checked:
        globalState.wizardOptions[globalState.tmcrIndex].graphics_svg || false,
    },
    {
      Title: "No Graphics",
      ID: "graphics_none",
      Descriptions: ["No graphics files required"],
      Checked:
        globalState.wizardOptions[globalState.tmcrIndex].graphics_none || false,
    },
  ];

  const isChecked = guidelines.some((item) => item.Checked === true);

  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    // Bit hacky here using the any type, but it allows us to dynamically name the payload attributes
    let payload: any = {};
    payload[e.target.id] = e.target.checked;

    if (e.target.id === "graphics_none" && e.target.checked) {
      guidelines.forEach((item) => {
        if (item.ID !== "graphics_none") {
          payload[item.ID] = false;
        }
      });
    } else {
      payload.graphics_none = false;
    }

    dispatch({ type: "MERGE_OPTION", payload });
  };

  return (
    <div className="m-3">
      <h1>Attachment 1</h1>
      <h3>Graphics Format Options</h3>
      <ol className="text-start">
        {guidelines.map((element) => (
          <div key={element.ID}>
            <h5>
              <Form.Check
                type="checkbox"
                name="graphics"
                checked={
                  globalState.wizardOptions[globalState.tmcrIndex][
                    element.ID
                  ] || false
                }
                id={element.ID}
                label={element.Title + ":"}
                onChange={handleClick}
                required={element.ID === "graphics_none" && !isChecked}
              />
            </h5>
            <ul>
              {element.Descriptions.map((description, index) => (
                <li key={element.ID + index}>{description}</li>
              ))}
            </ul>
          </div>
        ))}
      </ol>
    </div>
  );
};
