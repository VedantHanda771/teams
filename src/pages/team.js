import React from "react";
import Card from "../components/Card";
import { motion } from "framer-motion";

const coreTeamMembers = [
    {
        name: "Gursimran Singh",
        role: "Lead Organizer",
        image: "https://avatars.githubusercontent.com/u/135122793?v=4",
        description: "Gursimran Singh leads the GDG Chandigarh community and oversees all initiatives.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/gursimrxnsingh",
            twitter: "https://twitter.com/gursimrxnsingh",
            github: "https://github.com/gursimrxn",
        },
    },
    {
        name: "Emily Johnson",
        role: "Technical Lead",
        image: "https://th.bing.com/th/id/OIP.0SfmeS-Y16fJk9c-dCPSEwHaHa?rs=1&pid=ImgDetMain",
        description: "Bob manages technical events and workshops for the community.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/bob-smith",
            github: "https://github.com/bobsmith",
        },
    },
    {
        name: "Carol Williams",
        role: "Community Manager",
        image: "https://th.bing.com/th/id/OIP.iA9Q4OaCHS9cvigKitFobAHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.3",
        description: "Carol builds and nurtures our vibrant developer community.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/carol-williams",
        },
    },
    {
        name: "David Brown",
        role: "Event Coordinator",
        image: "https://th.bing.com/th/id/OIP.HAPtDQc2KyjthAkjQvTPKQHaFj?pid=ImgDet&w=178&h=133&c=7&dpr=1.3",
        description: "David handles event logistics and coordination.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/david-brown",
            twitter: "https://twitter.com/davidbrown",
        },
    },
    {
        name: "Rajesh Kumar",
        role: "Event Coordinator",
        image: "https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671116.jpg",
        description: "Coordinates community events and workshops.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/rajesh-kumar",
            twitter: "https://twitter.com/rajeshk",
        },
    },
    {
        name: "Priya Sharma",
        role: "Event Coordinator", 
        image: "https://cdn.dribbble.com/users/2645532/screenshots/10865833/3d_avatar-mise_en_page-dribbblexxl_4x.jpg",
        description: "Manages event planning and execution.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/priya-sharma",
            twitter: "https://twitter.com/priyas",
        },
    },
    {
        name: "Amit Patel",
        role: "Event Coordinator",
        image: "https://th.bing.com/th/id/OIP.iA9Q4OaCHS9cvigKitFobAHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.3",
        description: "Handles logistics and venue coordination.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/amit-patel",
            twitter: "https://twitter.com/amitp",
        },
    },
    {
        name: "Sneha Gupta",
        role: "Event Coordinator",
        image: "https://th.bing.com/th/id/OIP.HAPtDQc2KyjthAkjQvTPKQHaFj?pid=ImgDet&w=178&h=133&c=7&dpr=1.3",
        description: "Manages participant engagement and registration.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/sneha-gupta",
            twitter: "https://twitter.com/snehag",
        },
    },
];

const organizingTeam = [
    {
        name: "Neha Verma",
        role: "Content Lead",
        image: "https://th.bing.com/th/id/OIP.AMA8LlD5acgls0JIq02u5AHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.3",
        description: "Manages content strategy and social media presence.",
        socialLinks: {
            linkedin: "https://www.linkedin.com/in/neha-verma",
            twitter: "https://twitter.com/nehav",
        },
    },
];

const technicalTeam = [
    {
        name: "Rohit Mehta",
        role: "Web Developer",
        image: "https://cdn.dribbble.com/users/2645532/screenshots/10865833/3d_avatar-mise_en_page-dribbblexxl_4x.jpg",
        description: "Builds and maintains our web platforms.",
        socialLinks: {
            github: "https://github.com/rohitm",
            linkedin: "https://linkedin.com/in/rohit-mehta",
        },
    },
    {
        name: "Anjali Singh",
        role: "Mobile Developer",
        image: "https://th.bing.com/th/id/OIP.iA9Q4OaCHS9cvigKitFobAHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.3",
        description: "Leads our mobile development initiatives.",
        socialLinks: {
            github: "https://github.com/anjalis",
            linkedin: "https://linkedin.com/in/anjali-singh",
        },
    },
];

const marketingTeam = [
    {
        name: "Vikram Malhotra",
        role: "Marketing Lead",
        image: "https://th.bing.com/th/id/OIP.HAPtDQc2KyjthAkjQvTPKQHaFj?pid=ImgDet&w=178&h=133&c=7&dpr=1.3",
        description: "Drives our marketing and outreach efforts.",
        socialLinks: {
            linkedin: "https://linkedin.com/in/vikram-malhotra",
            twitter: "https://twitter.com/vikramm",
        },
    },
    {
        name: "Pooja Reddy",
        role: "Design Lead",
        image: "https://th.bing.com/th/id/OIP.AMA8LlD5acgls0JIq02u5AHaHa?pid=ImgDet&w=178&h=178&c=7&dpr=1.3",
        description: "Creates our visual identity and design materials.",
        socialLinks: {
            linkedin: "https://linkedin.com/in/pooja-reddy",
        },
    },
];

const TeamSection = ({ title, members }) => (
    <div className="mb-12">
        <h2 className="text-xl sm:text-2xl font-bold mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {members.map((member, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ 
                        opacity: 1,
                        y: 0,
                        transition: {
                            delay: index * 0.1
                        }
                    }}
                    viewport={{ once: true }}
                >
                    <Card
                        name={member.name}
                        designation={member.role}
                        imageSrc={member.image}
                        description={member.description}
                        links={member.socialLinks || {}}
                    />
                </motion.div>
            ))}
        </div>
    </div>
);

const TeamPage = () => (
    <div className="p-4 sm:p-8 w-full max-w-7xl mx-auto">
        <h1 className="text-left text-2xl sm:text-3xl font-bold mb-4">GDG Chandigarh</h1>
        <p className="text-left mb-6 sm:mb-8 text-sm sm:text-base">
            Meet the dedicated team behind GDG who make everything possible.
        </p>
        <TeamSection title="gdg chandigarh" members={coreTeamMembers} />
        <TeamSection title="gdg cloud chandigarh" members={organizingTeam} />
        <TeamSection title="gdg on campus leads" members={technicalTeam} />
        <TeamSection title="gdg on campus volunteers" members={marketingTeam} />
    </div>
);

export default TeamPage;
