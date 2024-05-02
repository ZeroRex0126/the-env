import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const connectionString = process.env.DB_STRING as string;
let client: any;

export async function GET() {
  try {
    client = await MongoClient.connect(connectionString);
  } catch (error) {
    return NextResponse.json(
      { error: "Could not connect to database." },
      { status: 500 }
    );
  }

  const db = client.db();

  try {
    let result = await db.collection("the_env").find({}).toArray();
    if (result) {
      return NextResponse.json(result);
    } else {
      return NextResponse.json(
        { error: "Storing message failed!" },
        { status: 500 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { error: "Storing message failed!" },
      { status: 500 }
    );
  } finally {
    client.close();
  }
}
