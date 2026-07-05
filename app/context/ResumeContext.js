"use client";
import { createContext, useContext, useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";

// 1. Create the context
const ResumeContext = createContext(null);

// 2. Create the provider wrapper
export function ResumeProvider({ children }) {
    const [personalInfo, setPersonalInfo] = useState({});
    const [achievements, setAchievements] = useState([]);
    const [certifications, setCertifications] = useState([]);
    const [contactInfo, setContactInfo] = useState({});
    const [education, setEducation] = useState([]);
    const [workExperience, setWorkExperience] = useState([]);
    const [projects, setProjects] = useState([]);
    const [services, setServices] = useState([]);
    const [skills, setSkills] = useState([]);
    const [testimonials, setTestimonials] = useState([]);

    const fetchResumeData = async () => {
        const querySnapshot = await getDocs(collection(db, "resumeData"));
        const data = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        setPersonalInfo(data.find(data => data.id === 'aboutSection'))
        setAchievements(data.find(data => data.id === 'achievementSection').achievements)
        setCertifications(data.find(data => data.id === 'certificationSection').certifications)
        setContactInfo(data.find(data => data.id === 'contactSection'))
        setEducation(data.find(data => data.id === 'educationSection').education)
        setWorkExperience(data.find(data => data.id === 'experienceSection').workExperience)
        setProjects(data.find(data => data.id === 'portfolioSection').projects)
        setServices(data.find(data => data.id === 'serviceSection').services)
        setSkills(data.find(data => data.id === 'skillSection').skills)
        setTestimonials(data.find(data => data.id === 'testimonialSection').testimonials)
    };

    useEffect(() => {
        fetchResumeData()
    }, [])

    return (
        <ResumeContext.Provider value={{ personalInfo, achievements, certifications, contactInfo, education, workExperience, testimonials, skills, services, projects }}>
            {children}
        </ResumeContext.Provider>
    );
}

// 3. Create a custom hook for easy consumption
export function useResume() {
    const context = useContext(ResumeContext);
    if (!context) {
        throw new Error("useResume must be used within a ResumeProvider");
    }
    return context;
}