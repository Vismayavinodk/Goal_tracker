import React, { useState, useEffect } from 'react';
import axios from "axios";
import { ApiRoutes, Host } from "../constants/constants";


const goals = ({ getEmail }) => {
    const [goal, setGoal] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [mail, setMail] = useState(null);
    useEffect(() => {
        if (mail != null) {

            console.log(mail);
            const fetchGoal = async () => {
                try {
                    const response = await axios.get(`${Host.APIHOST}${ApiRoutes.GOALS}?gmail=${mail}`);
                    console.log(response)
                    setGoal(response.data);


                } catch (err) {
                    setError("FAILED TO FETCH GOALS!");
                    console.error(err);
                } finally {
                    setLoading(false);
                }
            };
            
            fetchGoal();
        }

    }, [mail]);

    useEffect(() => {
        const res = getEmail();
        console.log(res);
        setMail(res);
    }, [getEmail])

    return (
        <div className="w-screen h-screen bg-gray-100 flex items-center justify-center">
            <div className="max-w-lg w-full bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold text-center text-blue-600 mb-4">Your Goals</h1>
                {loading ? (
                    <p className="text-center text-gray-500">Loading...</p>
                ) : error ? (
                    <p className="text-center text-red-500">{error}</p>
                ) : (
                    <div className="space-y-4">
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold text-gray-700">Goal ID:</span>
                            <span className="text-gray-600">{goal?.gid}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold text-gray-700">Title:</span>
                            <span className="text-gray-600">{goal?.goalTitle}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold text-gray-700">Description:</span>
                            <span className="text-gray-600">{goal?.goalDesc}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold text-gray-700">Start Date:</span>
                            <span className="text-gray-600">{new Date(goal?.goalStartDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold text-gray-700">End Date:</span>
                            <span className="text-gray-600">{new Date(goal?.goalEndDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold text-gray-700">Created Date:</span>
                            <span className="text-gray-600">{new Date(goal?.goalCreatedDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold text-gray-700">Updated Date:</span>
                            <span className="text-gray-600">{new Date(goal?.goalUpdatedDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold text-gray-700">Type:</span>
                            <span className="text-gray-600">{goal?.goalType}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold text-gray-700">Status:</span>
                            <span className="text-gray-600">{goal?.goalStatus}</span>
                        </div>
                        <div className="flex justify-between border-b pb-2">
                            <span className="font-semibold text-gray-700">Priority:</span>
                            <span className="text-gray-600">{goal?.goalPriority}</span>
                        </div>
                        <div className="flex justify-between">
                            <span className="font-semibold text-gray-700">Reference:</span>
                            <span className="text-gray-600">{goal?.goalRef}</span>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
    
    
}
export default goals
