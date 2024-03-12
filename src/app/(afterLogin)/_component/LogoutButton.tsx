"use client";

import React from "react";
import style from "./logoutButton.module.css";
export default function LogoutButton() {
	const me = {
		id: "megar0829",
		nickname: "배정식",
		image: "/5Udwvqim.jpg",
	};

	const onLogout = () => {};

	return (
		<button className={style.logOutButton} onClick={onLogout}>
			<div className={style.logOutUserImage}>
				<img src={me.image} alt={me.id}/>
			</div>
			<div className={style.logOutUserName}>
				<div>{me.nickname}</div>
				<div>@{me.id}</div>
			</div>
		</button>
	);
}