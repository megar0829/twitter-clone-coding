"use client";

import {useRouter} from "next/navigation";
import Main from "@/app/(beforeLogin)/_component/Main";

export default function Login() {
	const router = useRouter();
	router.replace("/i/flow/login");
	return (
		<Main />
	);
}

// server route : next/navigation => Link
// client route : react/useRouter => push, replace

// router.push
// => 다음 페이지로 이동하고 route history 기록 또한 계속 유지된다.
// 뒤로가기를 할 경우 route history roof 에 갇히게 된다.

// router.replace
// => 현재 페이지를 replace 하여 전환하고 route history는 늘어나지 않는다.