import React from "react";

export default function ExperienceEntry({ position, company, location, time, description}) {
  return (
      <div>
        <div style={{display:'inline'}}>{position} • {company}</div>
        <div style={{float:'right'}}>{time}</div>
        <p>{location}</p>
       {description}
      </div>
  );
}
