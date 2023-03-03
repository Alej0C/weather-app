import React from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from "react-accessible-accordion";
import s from "./style.module.css";

const WEEK_DAYS = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
        WEEK_DAYS.slice(0, dayInAWeek)
    );

    return (
        <>
            <label className={s.title}>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className={s.dailyItem}>
                                    <img
                                        src={`icons/${item.weather[0].icon}.png`}
                                        className={s.iconsSmall}
                                        alt="weather"
                                    />
                                    <label className={s.day}>{forecastDays[idx]}</label>
                                    <label className={s.description}>
                                        {item.weather[0].description}
                                    </label>
                                    <label className={s.minMax}>
                                        {Math.round(item.main.temp_max)}°C /
                                        {Math.round(item.main.temp_min)}°C
                                    </label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className={s.dailyDetailsGrid}>
                                <div className={s.dailyDetailsGridItem}>
                                    <label>Pressure:</label>
                                    <label>{item.main.pressure}</label>
                                </div>
                                <div className={s.dailyDetailsGridItem}>
                                    <label>Humidity:</label>
                                    <label>{item.main.humidity}</label>
                                </div>
                                <div className={s.dailyDetailsGridItem}>
                                    <label>Clouds:</label>
                                    <label>{item.clouds.all}%</label>
                                </div>
                                <div className={s.dailyDetailsGridItem}>
                                    <label>Wind speed:</label>
                                    <label>{item.wind.speed} m/s</label>
                                </div>
                                <div className={s.dailyDetailsGridItem}>
                                    <label>Sea level:</label>
                                    <label>{item.main.sea_level}m</label>
                                </div>
                                <div className={s.dailyDetailsGridItem}>
                                    <label>Feels like:</label>
                                    <label>{item.main.feels_like}°C</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </>
    );
};

export default Forecast;
