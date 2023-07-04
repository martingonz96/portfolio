export const personalData = {
	name: "Martín González",
	role: "Full Stack Developer",
	education: [
		"Marketing Technician, IES Siglo 21(2016-2019)",
		"Full Stack Web Developer, Digital House(2022-2023)",
	],
	contactLinks: [
		"mailto:martingonzalezachaval@gmail.com",
		"https://github.com/martingonz96",
		"https://www.linkedin.com/in/mart%C3%ADn-gonz%C3%A1lez-achaval/",
	],
};

export const aboutMe = {
	title: "About Me",
	body: [
		"As an experienced media buyer with over five years in the industry, I have recently decided to embark on a new path that aligns with my passion for programming and the limitless possibilities it offers. My background as a media buyer, coupled with my full stack web development skills, gives me a unique advantage as a full stack web developer.",
		"Throughout my career, I have honed a diverse range of qualities that make me a valuable asset to any team. I am persistent, always striving to overcome challenges and find innovative solutions. As a team player, I thrive in collaborative environments, leveraging the strengths of my colleagues to achieve collective success. My creativity fuels my problem-solving abilities, allowing me to think outside the box and develop unique solutions. I am naturally curious, constantly seeking to expand my knowledge and stay up to date with the latest trends and technologies. Additionally, I am an active listener, valuing the input and perspectives of others to create well-rounded and impactful solutions.",
	],
};

export const skills = {
	soft: [
		{ icon: "👂🏼", text: "Active Listening" },
		{ icon: "💬", text: "Effective Communication" },
		{ icon: "👥", text: "Collaboration" },
		{ icon: "⽓", text: "Teamwork" },
		{ icon: "💪", text: "Persistent" },
	],
	hard: [
		{ icon: "💻", text: "NodeJs" },
		{ icon: "📜", text: "Javascript" },
		{ icon: "⚛️", text: "React" },
		{ icon: "💾", text: "SQL" },
		{ icon: "🍃", text: "Mongo DB" },
		{ icon: "⚙️", text: "Express Js" },
		{ icon: "🖌️", text: "Tailwind CSS" }
	],
};

export const professionalData = {
	title: "Professional Experience",
	experiences: [
		{
			role: "Media Buyer (2022-Present)",
			description:
				"Design and implement Facebook, Youtube and Google ads Lead Generation campaigns, do weekly and monthly reports and optimize strategies",
			current: true,
		},

		{
			role: "Full Stack Web Developer, Digital House(2022-2023)",
			description:
				"Do a Full Stack Project, implementing ExpressJs, MySQL, React, APIs, CRUD and MVC methodology. Collaborate in the backend and frontend of the project",
			current: false,
		}
	],
};

export const projects = [
		{
			title: "UpTask - MERN Project",

			img: 'uptask.png',
			
			description: 'Full Stack MERN Project, using NextJs, React, NodeJs, ExpressJs, Mongoose, MongoDB, Tailwind CSS. With validations from the backend and frontend for the user, with Authorization method using JWT. CRUD methodolgy implemented',

			link: 'https://github.com/martingonz96/Uptask_MERN_frontend'

		},
		{
			title: "Quiosco App",

			img:'caffee-shop.png',
			
			description: 'Proyect created wtih NextJs, React, Prisma, TailwindCSS . With sites for the user to make an order and sites for the admin to receive ther order in real time',

			link: 'https://github.com/martingonz96/quioscoapp'

		},

		{
			title: "CRUD Redux App",

			img:'crud-redux.png',
			
			description: 'Proyect created with React, Redux and Bootstrap. CRUD methodology implemented',

			link: 'https://github.com/martingonz96/CRUD_REDUX_REACT'

		},

		{
			title: "Shoes Wing - Final Project Digital House",

			img:'shoeswing.jpg',
			
			description: 'Proyect created with React, Express Js, MySQL, Sequelize, APIs. CRUD methodology implented. MVC structure implemented',

			link: 'https://github.com/martingonz96/grupo_9_Shoeswing'

		},
	]
