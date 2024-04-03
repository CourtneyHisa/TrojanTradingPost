import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Information {
    about: string;
    location: string;
    opening: {
        date: string[];
        dayTime: {
            day: string[];
            time: string[][];
        };
    };
}

export default function Home() {
    const days: string[] = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"]
    const months: string[] = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [information, setInformation] = useState<Information>({
        about:
            "The Trojan Trading Post, or TTP for short, is a student-led pop-up shop that features different products created by students within the various Career and Technical Education pathways. We aim to foster Mililani school spirit and pride",
        location: "95-1248 Meheula Pkwy, Mililani Town, Hawaii",
        opening: {
            date: ["November 17", "December 16"],
            dayTime: {
                day: ["Friday", "Saturday"],
                time: [
                    ["3PM", "8PM"],
                    ["10AM", "8PM"],
                ],
            },
        },
    });

    const aboutRef = useRef<HTMLTextAreaElement>(null);
    const locationRef = useRef<HTMLInputElement>(null);
    const daysModalRef = useRef<HTMLDialogElement>(null);
    const timeModalRef = useRef<HTMLDialogElement>(null);
    const [modalDays, setModalDays] = useState<string[]>([])
    const [startDatePicker, setStartDatePicker] = useState<Date>(new Date());
    const [endDatePicker, setEndDatePicker] = useState<Date>(new Date());

    const handleSubmit = () => {
        const startDateDay = startDatePicker.getDay();
        const endDateDay = endDatePicker.getDay();
        const startDateMonth = startDatePicker.getMonth();
        const startDateDate = startDatePicker.getDate();
        const endDateMonth = endDatePicker.getMonth();
        const endDateDate = endDatePicker.getDate();
        if (aboutRef.current?.value) {
            setInformation(prevState => {
                const prevInformation = { ...prevState }
                prevInformation.about = aboutRef.current!.value
                return prevInformation
            })
        }
        if (locationRef.current?.value) {
            setInformation(prevState => {
                const prevInformation = { ...prevState }
                prevInformation.location = locationRef.current!.value
                return prevInformation
            })
        }
        for (let i = 0; i < days.length; i++) {
            if (startDateDay === i + 1) {
                setInformation(prevState => {
                    const prevInformation = { ...prevState }
                    prevInformation.opening.dayTime.day[0] = days[i]!
                    return prevInformation
                })
            } else {
                if (endDateDay === i + 1) {
                    setInformation(prevState => {
                        const prevInformation = { ...prevState }
                        prevInformation.opening.dayTime.day[1] = days[i]!
                        return prevInformation
                    })
                }
            }
        }
        for (let i = 0; i < months.length; i++) {
            if (startDateMonth === i) {
                setInformation(prevState => {
                    const prevInformation = { ...prevState }
                    prevInformation.opening.date[0] = months[i] + " " + startDateDate.toString();
                    return prevInformation
                })
            } else {
                if (endDateMonth === i) {
                    setInformation(prevState => {
                        const prevInformation = { ...prevState }
                        prevInformation.opening.date[1] = months[i] + " " + endDateDate.toString();
                        return prevInformation
                    })
                }
            }
        }
        console.log(information)
    }

    const handleModalDay = (day: string) => {
        if (day) {
            setModalDays(prevState => {
                const modalDays = { ...prevState }
                prevState.push(day)
                return modalDays
            })
        }
    }

    return (
        <>
            <div className="pb-8 text-2xl md:px-16 xl:px-24 xl:text-3xl">
                <div className="grid grid-cols-2 md:mt-8 xl:mt-16">
                    <div className="w-fill rounded-lg border-8 border-brown2 bg-tan2 text-beige1 md:mr-4 md:p-6 xl:mr-20">
                        {/* Trojan Trading Post About */}
                        <h2 className="pb-2 text-2xl font-bold underline xl:text-4xl">
                            What is the Trojan Trading Post?
                        </h2>
                        <p className="">{information.about}</p>
                    </div>
                    <div className="w-fill rounded-lg border-8 border-brown2 bg-tan2 text-beige1 md:ml-4 md:p-6 xl:ml-20">
                        <div>
                            {/* Location */}
                            <h2 className="pb-2 text-2xl font-bold underline xl:text-4xl">
                                Location
                            </h2>
                            <p className="pb-4">{information.location}</p>
                            {/* Opening Duration */}
                            <h2 className="pb-2 pt-2 text-2xl font-bold underline xl:text-4xl">
                                Open from
                            </h2>
                            <p className="pb-2">
                                {information.opening.date[0]} - {information.opening.date[1]}{" "}
                                <br />
                                {information.opening.dayTime.day[0]}:{" "}
                                {information.opening.dayTime.time[0]?.join(" - ")} <br />
                                {information.opening.dayTime.day[1]}:{" "}
                                {information.opening.dayTime.time[1]?.join(" - ")}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div>
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">About Text</span>
                        </div>
                        <textarea
                            className="textarea textarea-bordered h-20"
                            placeholder="Type Here"
                            ref={aboutRef}
                        ></textarea>
                    </label>
                </div>
                <div>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Location</span>
                        </div>
                        <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" ref={locationRef} />
                    </label>
                </div>
                <div>
                    <DatePicker
                        showIcon
                        toggleCalendarOnIconClick
                        selected={startDatePicker}
                        onChange={(date) => date ? setStartDatePicker(date) : new Date()}
                    />
                    <DatePicker
                        showIcon
                        toggleCalendarOnIconClick
                        selected={endDatePicker}
                        onChange={(date) => date ? setEndDatePicker(date) : new Date()}
                    />
                    <button className="btn" onClick={() => daysModalRef.current?.showModal()}>Days Open</button>
                    <dialog id="my_modal_1" className="modal" ref={daysModalRef}>
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Choose which days of the week it will be open</h3>
                            <div className="form-control">
                                {days.map(day => (
                                    <label className="label cursor-pointer" key={day}>
                                        <span className="label-text">{day}</span>
                                        <input type="checkbox" className="checkbox" onChange={() => handleModalDay(day)}></input>
                                    </label>
                                ))}
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn" onClick={() => timeModalRef.current?.showModal()}>Next</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <dialog id="my_modal_1" className="modal" ref={timeModalRef}>
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Choose what time the days are open</h3>
                            <div className="form-control">
                                {days.map(day => (
                                    <label className="label cursor-pointer" key={day}>
                                        <span className="label-text">{day}</span>
                                        <input type="checkbox" className="checkbox"></input>
                                    </label>
                                ))}
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn">Next</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                </div>
                <div>
                    <input type="button" value="Apply" className="btn" onClick={handleSubmit} />
                </div>
            </div>
        </>
    );
}
