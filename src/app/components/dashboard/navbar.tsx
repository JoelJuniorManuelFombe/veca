/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function NavBarDashboard() {
    return (
        <section>
            <div className="w-full bg-blue-800">
                <div className="container mx-auto flex justify-between items-center py-2">
                    <span>VECA 🚩📍</span>
                    <div>
                        <div className="flex gap-5 items-center">
                            <div className="w-10">
                                <img className="rounded-full" src="dashboard/images.png" alt="" />
                            </div>
                            <span>Joel Junior</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
