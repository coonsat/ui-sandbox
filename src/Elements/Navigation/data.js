import * as RiIcons from 'react-icons/ai';

const arrowUp = <RiIcons.AiFillCaretUp />;
const arrowDown = <RiIcons.AiFillCaretDown />;

const labels = 
    [
        {
            title: "Home",
            icon: <RiIcons.AiFillHome />,
        },
        {
            title: "Calendars",
            icon: <RiIcons.AiFillMessage />,
            iconClosed: arrowDown,
            iconOpened: arrowUp,
        },
        {
            title: "Notifications",
            icon: <RiIcons.AiTwotoneCalendar />,
            iconClosed: arrowDown,
            iconOpened: arrowUp,
        },
        {
            title: "Modular",
            icon: <RiIcons.AiFillExperiment />,
            iconClosed: arrowDown,
            iconOpened: arrowUp,
        },
        {
            title: "Content Manager",
            icon: <RiIcons.AiOutlineOrderedList />,
            iconClosed: arrowDown,
            iconOpened: arrowUp,
            subNav: 
                [
                    {
                        title: "List view"
                    },
                    {
                        title: "Gallery view"
                    },
                    {
                        title: "Photo Slider"
                    }
                ]
        }, 
        {
            title: "Diagrams",
            icon: <RiIcons.AiOutlineRadarChart />,
            iconClosed: arrowDown,
            iconOpened: arrowUp,
            subNav: 
                [
                    {
                        title: "Gannt Charts"
                    },
                    {
                        title: "Canban Boards"
                    },
                    {
                        title: "Time Series"
                    },
                    {
                        title: "Tournaments"
                    },
                    {
                        title: "Canban Boards"
                    },
                    {
                        title: "Organisational Chart"
                    }
                ]
        },
        {
            title: "Misc",
            icon: <RiIcons.AiOutlineDeploymentUnit />,
            iconClosed: arrowDown,
            iconOpened: arrowUp,
            subNav: 
                [
                    {
                        title: "Buttons"
                    },
                    {
                        title: "Sliders"
                    },
                    {
                        title: "Drop Downs"
                    },
                    {
                        title: "Insructional"
                    }
                ]
        },
        {
            title: "UI",
            icon: <RiIcons.AiFillHome />,
            iconClosed: arrowDown,
            iconOpened: arrowUp,
            subNav: 
                [
                    {
                        title: "Gannt Charts"
                    },
                    {
                        title: "Canban Boards"
                    }
                ]
        },
        {
            title: "Help",
            icon: <RiIcons.AiFillQuestionCircle />,
            iconClosed: arrowDown,
            iconOpened: arrowUp,
            subNav: 
                [
                    {
                        title: "Contact"
                    },
                    {
                        title: "Bot"
                    },
                    {
                        title: "Menu"
                    },
                    {
                        title: "Feedback"
                    }
                ]
        }
]

// replace space with -
// make all letters lower case
const transform = (path) => {
    return path.replace(/\ /g,'-')
               .replace(/[A-Z]/g, function(match) {
                   return match.toLowerCase();
               });
};

// prepare data for sidebar
export const sidebar = labels.map(item => {
    return (
                { 
                    title: item.title, 
                    path: `/${transform(item.title)}`, 
                    icon: item.icon,
                    closed: item.iconClosed,
                    open: item.iconOpened,
                    subNav: item.subNav
                }
            )
});