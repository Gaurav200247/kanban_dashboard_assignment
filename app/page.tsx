import React from "react";
import NavBar from "@/Components/NavBar/NavBar";
import KanBanList from "@/Components/KanBan_Board_page/KanBanList";
import PageTitleContainer from "@/Components/PagesComponents/PageTitleContainer";

const Home = () => {
  const page_title_data = {
    page_details: {
      page_title: "School November Tasks",
      page_creator: "Instructor Day",
      created_At: "November 31, 2022",
      num_of_comments: 45,
      page_status: "Private",
    },
    accessed_users: 6,
    company_details: {
      company_logo: "/assets/company_logo.png",
      company_name: "Centered Martial Arts",
      company_address: "Sunnyvale, Ca",
    },
    total_progress: 60,
  };

  const KanBan_Data = [
    {
      list_heading: "To-Do List",
      list_length: 24,

      tasks_list: [
        {
          status: "important",
          task_heading:
            "Create sign up sheet for holiday student/parent conferences.",
          progress: 40,
          progress_color: "#FFAB2D",
          deadline: 4,
          assigned_users: 4,
          tilted: false,
        },
        {
          status: "Instructor Meeting",
          task_heading: "Plan holiday demonstration program. Create outline.",
          progress: 50,
          progress_color: "#E328AF",
          deadline: 4,
          assigned_users: 3,
          tilted: false,
        },

        {
          status: "Databse",
          task_heading:
            "Determine how many boards need to be ordered for testing and demo.",
          progress: 30,
          progress_color: "#38E25D",
          deadline: 4,
          assigned_users: 2,
          tilted: false,
        },
      ],
    },
    {
      list_heading: "In Progress",
      list_length: 2,

      tasks_list: [
        {
          status: "Video",
          task_heading: "Create sparring tutorial video for the weekly class.",
          progress: 90,
          progress_color: "#5ECFFF",
          deadline: 4,
          assigned_users: 3,
          tilted: false,
        },
        {
          status: "BUGS FIXING",
          task_heading: "Payment gateway needs reauthorization.",
          progress: 95,
          progress_color: "#FF4A55",
          deadline: 4,
          assigned_users: 4,
          tilted: true,
        },
      ],
    },
    {
      list_heading: "Done",
      list_length: 3,

      tasks_list: [
        {
          status: "BUGS FIXING",
          task_heading: "Action Button needed for Google Maps visits.",
          progress: 100,
          progress_color: "#FF4A55",
          deadline: 4,
          assigned_users: 4,
          tilted: false,
        },
        {
          status: "Database",
          task_heading: "Update new instructor photos.",
          progress: 100,
          progress_color: "#38E25D",
          deadline: 4,
          assigned_users: 4,
          tilted: false,
        },
        {
          status: "Instructor Meeting",
          task_heading: "Review/correct yellow belt techniques.",
          progress: 100,
          progress_color: "#E328AF",
          deadline: 4,
          assigned_users: 4,
          tilted: false,
        },
      ],
    },
    {
      list_heading: "Revised",
      list_length: 0,

      tasks_list: [],
    },
  ];

  return (
    <div className="w-full h-full text-white bg-[#0c0b20] ">
      <NavBar />

      <PageTitleContainer {...page_title_data} />

      <div className="kanban_board_container w-[95%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 m-2 md:m-5">
        {KanBan_Data.map((item, index) => {
          return <KanBanList key={index} {...item} />;
        })}
      </div>
    </div>
  );
};

export default Home;
