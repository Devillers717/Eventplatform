import Collection from '@/components/shared/Collection'
import { Button } from '@/components/ui/button'
import { getEventsByUser } from '@/lib/actions/event.action'
import { auth } from '@clerk/nextjs/server'
import Link from 'next/link'
import React from 'react'

const ProfilePgae = async () => {
    const authResult = await auth();
    const { sessionClaims } = authResult;
    const userId = sessionClaims?.userId as string;
    const organizedEvents = await getEventsByUser({userId, page: 1})
  return (
    <>
       {/* {My tickets} */}
       <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className='font-bold text-center sm:text-left'>My Tickets</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/#events">
              Explore More Events
            </Link>
          </Button>
          </div>
          </section>
          {/* <section className="wrapper my-8">
             <Collection
                    data={events?.data}
                    emptyTitle="No event tickets purchased yet"
                    emptyStateSubtext="No worries - plenty of exciting events to explore!"
                    collectionType="My_Tickets"
                    limit={3}
                    page={1}//page
                    urlParamName="ordersPage"
                    totalPages={2}//events?.totalPages
                    />
          </section> */}
      {/* {Events Organized}  */}
      <section className="bg-primary-50 bg-dotted-pattern bg-cover bg-center py-5 md:py-10">
        <div className="wrapper flex items-center justify-center sm:justify-between">
          <h3 className='font-bold text-center sm:text-left'>Events Organized</h3>
          <Button asChild size="lg" className="button hidden sm:flex">
            <Link href="/events/create">
              Create New Event
            </Link>
          </Button>
        </div>
      </section>

      <section className="wrapper my-8">
             <Collection
                    data={organizedEvents?.data}
                    emptyTitle="No event Created  yet"
                    emptyStateSubtext="Go Cretae Some Now"
                    collectionType="Events_Organized"
                    limit={6}
                    page={1}//page
                    urlParamName="eventsPage"
                    totalPages={2}//events?.totalPages
                    />
          </section>
    </> 
  )
}

export default ProfilePgae
