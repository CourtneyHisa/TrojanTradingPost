import { useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Information {
    about: string;
    location: string;
    opening: {
        date: string[];
        dayTime: {day: string, time: string[]}[];
    };
}


export default function Edit() {
    const days: string[] = ["Monday", "Tuesday", "Wednsday", "Thursday", "Friday", "Saturday", "Sunday"]
    const months: string[] = ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const [information, setInformation] = useState<Information>({
        about:
            "The Trojan Trading Post, or TTP for short, is a student-led pop-up shop that features different products created by students within the various Career and Technical Education pathways. We aim to foster Mililani school spirit and pride",
        location: "95-1248 Meheula Pkwy, Mililani Town, Hawaii",
        opening: {
            date: ["November 17", "December 16"],
            dayTime:
                [
                    {
                        day: "Friday",
                        time: ["3PM", "8PM"],
                    },
                    {
                        day: "Saturday",
                        time: ["10AM", "8PM"],
                    }
                ]
        },
    });
    const aboutRef = useRef<HTMLTextAreaElement>(null);
    const locationRef = useRef<HTMLInputElement>(null);
    const daysModalRef = useRef<HTMLDialogElement>(null);
    const timeModalRef = useRef<HTMLDialogElement>(null);
    const [modalDays, setModalDays] = useState<string[]>(information.opening.dayTime.map(cat => cat.day));
    const [startDatePicker, setStartDatePicker] = useState<Date>(new Date());
    const [endDatePicker, setEndDatePicker] = useState<Date>(new Date());
    const handleSubmit = () => {
        const startDateMonth = startDatePicker.getMonth();
        const startDateDate = startDatePicker.getDate();
        const endDateMonth = endDatePicker.getMonth();
        const endDateDate = endDatePicker.getDate();
        if (aboutRef.current?.value) {
            setInformation(prevState => {
                const prevInformation = { ...prevState };
                prevInformation.about = aboutRef.current!.value;
                return prevInformation;
            })
        }
        if (locationRef.current?.value) {
            setInformation(prevState => {
                const prevInformation = { ...prevState };
                prevInformation.location = locationRef.current!.value;
                return prevInformation;
            })
        }
        for (let i = 0; i < months.length; i++) {
            if (startDateMonth === i) {
                setInformation(prevState => {
                    const prevInformation = { ...prevState };
                    prevInformation.opening.date[0] = months[i] + " " + startDateDate.toString();
                    return prevInformation;
                })
            }
            if (endDateMonth === i) {
                setInformation(prevState => {
                    const prevInformation = { ...prevState };
                    prevInformation.opening.date[1] = months[i] + " " + endDateDate.toString();
                    return prevInformation;
                })
            }
        }
        console.log(information);
    }
    const handleTimeChange = () => {
        const newModalTimes: {day: string, time: string[]}[] = [];
        
        modalDays.forEach(day => {
            const startTimeInput = document.getElementById(`${day}-start-time`) as HTMLInputElement;
            const endTimeInput = document.getElementById(`${day}-end-time`) as HTMLInputElement;
            if (startTimeInput && endTimeInput) {
                newModalTimes.push({
                    day: day,
                    time: [startTimeInput.value, endTimeInput.value]
                });
            }
        });
        setInformation(prevState => {
            const prevInformation = { ...prevState }
            prevInformation.opening.dayTime = newModalTimes;
            return prevInformation;
        })
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
                                {information.opening.dayTime.length == 0 ? "There is no set days ; time" : information.opening.dayTime.map(day => (<>{day.day + ": " + day.time.join(" - ")} <br/></>))}
                                
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
                                        <input
                                            type="checkbox"
                                            className="checkbox"
                                            checked={modalDays.includes(day)}
                                            onChange={() => {
                                                if (!modalDays.includes(day)) {
                                                    setModalDays([...modalDays, day]);
                                                } else {
                                                    setModalDays(prevState => prevState.filter(item => item !== day));
                                                }
                                            }}
                                        />
                                    </label>
                                ))}
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn" onClick={() => { modalDays.length != 0 ? timeModalRef.current?.showModal() : handleTimeChange() }}>Next</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <dialog className="modal" ref={timeModalRef}>
                        <div className="modal-box">
                            <h3 className="font-bold text-lg">Choose what time the days are open</h3>
                            <div className="form-control">
                                {modalDays.map(day => (
                                    <label className="label cursor-pointer" key={day}>
                                        <span className="label-text">{day}</span>
                                        <label className="form-control w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text">Start Time</span>
                                            </div>
                                            <input id={`${day}-start-time`} type="text" placeholder="EX: 12:30" className="input input-bordered w-full max-w-xs" />
                                        </label>
                                        <label className="form-control w-full max-w-xs">
                                            <div className="label">
                                                <span className="label-text">End Time</span>
                                            </div>
                                            <input id={`${day}-end-time`} type="text" placeholder="EX: 12:30" className="input input-bordered w-full max-w-xs" />
                                        </label>
                                    </label>
                                ))}
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    {/* if there is a button in form, it will close the modal */}
                                    <button className="btn" onClick={() => daysModalRef.current?.showModal()}>Back</button>
                                    <button className="btn" onClick={handleTimeChange}>Apply</button>
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
