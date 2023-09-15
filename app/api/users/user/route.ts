import { NextRequest, NextResponse } from "next/server";

import authData from "@/lib/authData";
import { connect } from "@/database/dbConfig";
import User from "@/models/userModel";

connect();

const POST = async (request: NextRequest) => {
	try {
		const reqBody = await request.json();
		const { username } = reqBody;
		if (!username) {
			return NextResponse.json(
				{ message: "No username recieved!" },
				{ status: 400 }
			);
		}

		let isLoggedIn = false,
			isSelf = false,
			isAvailable = false;

		const data = authData(request);
		if (data) {
			isLoggedIn = true;
		}

		if (data?.username === username) {
			isSelf = true;
		}

		const user = await User.findOne({ username });
		if (!user) {
			isAvailable = true;
		}

		return NextResponse.json(
			{
				isLoggedIn,
				isSelf,
				isAvailable,
			},
			{
				status: 200,
			}
		);
	} catch (error) {
		return NextResponse.json(
			{
				message: error.message,
			},
			{
				status: 500,
			}
		);
	}
};

export { POST };
