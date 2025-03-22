import EventForm from "@/components/shared/EventForm"
import { auth } from "@clerk/nextjs/server"
import { getEventById } from "@/lib/actions/event.action";
type UpdateEventprops={
  params: {
    id: string
  }
}
const UpdateEvent = async ({params}: UpdateEventprops) => {
  const { id } = params;
    const authResult = await auth();
    const {sessionClaims}= authResult;
    const userId =sessionClaims?.userId as string;
    const event = await getEventById(id); // Fetch the event data from the database or API

    if (!event) {
      // Handle the case where the event is not found
      return <div>
        <h1>Event not found</h1>
      </div>
    }
  
    return (
      <>
        <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
          <big>
            <h3 className="wrapper  text-center sm:text-left text-3xl ">
              Update Event
            </h3>
          </big>
        </section>
        <div className="wrapper my-8">
          <EventForm userId={userId} type="Update" event={event} eventId={event._id} />
        </div>
      </>
    );
  };
  
  export default UpdateEvent;
