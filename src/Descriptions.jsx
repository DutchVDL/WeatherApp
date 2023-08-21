/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { FaArrowDown, FaWind } from "react-icons/fa";
import { BiHappy } from "react-icons/bi";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";

export const Descriptions = ({ weather, units }) => {
  const tempUnit = units === "metric" ? "C" : "F";
  const windUnit = units === "metric" ? "m/h" : "m/h";

  const cards = [
    {
      id: 1,
      icon: <FaArrowDown />,
      title: "min",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 2,
      icon: <FaArrowDown />,
      title: "max",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 3,
      icon: <BiHappy />,
      title: "feels like",
      data: weather.temp_min.toFixed(),
      unit: tempUnit,
    },
    {
      id: 4,
      icon: <MdCompress />,
      title: "pressure",
      data: weather.temp_min.toFixed(),
      unit: "hPa",
    },
    {
      id: 5,
      icon: <MdOutlineWaterDrop />,
      title: "humidity",
      data: weather.humidity,
      unit: "%",
    },
    {
      id: 6,
      icon: <FaWind />,
      title: "wind speed",
      data: weather.temp_min.toFixed(),
      unit: windUnit,
    },
  ];

  return (
    <div className="section section__descriptions">
      {cards.map(({ id, icon, title, data, unit }) => {
        return (
          <div key={id} className="card">
            <div className="description__card-icon">
              {icon}
              <small>{title}</small>
            </div>
            <h2>{`${data} ${unit}`}</h2>
          </div>
        );
      })}
    </div>
  );
};
