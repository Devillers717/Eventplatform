import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs/server"

const UpdateEvent = async () => {
    const authResult = await auth();
    const {sessionClaims}= authResult;
    const userId =sessionClaims?.userId as string;
    console.log(userId)
  return (
    <>
    <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
   <big><h3 className="wrapper  text-center sm:text-left text-3xl ">Create Event</h3></big>
    </section>
    <div className="wrapper my-8">
        <EventForm userId={userId} type="update" />
    </div>
    </>
     
  )
}

export default UpdateEvent
