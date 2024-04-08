import { MongoClient } from "mongodb";
import { NextRequest, NextResponse } from "next/server";

const connectionString = process.env.DB_STRING as string;
let client: any;

export async function GET(req: NextRequest) {
  try {
    client = await MongoClient.connect(connectionString);
  } catch (error) {
    return NextResponse.json(
      { error: "Could not connect to database." },
      { status: 500 }
    );
  }

  const db = client.db();

  switch (req.method) {
    case "GET":
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
        return;
      } finally {
        client.close();
      }
      break;
    default:
      break;
  }
}
