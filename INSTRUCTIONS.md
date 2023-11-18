## Instructions
For Transferz's driver app, you have to create a new page to display all the journeys assigned to a particular driver. Drivers will use that page to keep track of their upcoming rides. Drivers should also be able to add new journeys in the app through a form. Journeys can not be edited by the driver, but they can remove rides that were canceled by the traveler. Drivers can also mark a journey as completed once they drop the traveler off at their destination.

### Data model
The data model for the assignment has the following structure:
![image](https://github.com/transferz/dev-assignment-fe/assets/29891965/1cd98968-ba5d-47da-abd0-acc29db9d224)

**Some remarks**:
- The `id` and `created_at` fields are auto-generated. You don't need to provide them when creating a new journey.
- The `inbound` field is `true` if the journey is address-to-airport, and `false` (meaning it is an outbound journey) if airport-to-address.
- The `status` field value is always one of: `PENDING` | `COMPLETED`.

### Deliverables
1. Fork the repository to work on the assignment.
1. Once you are finished, make the project public and share the URL with us.
1. We expect that the tests will pass and the application can be built without errors.

### To do
1. There is no need to implement authentication.
1. Explore the app to get a grasp of how to communicate with the API.
1. The app contains a **GraphiQL** client, with the schema documentation and a playground, that allows you to explore the API in order to craft the queries/mutations you need to use.
1. In the journey page, fetch all journeys from the API using the Apollo client and display them neatly on the page.
1. Add a text input that can filter journeys by name.
1. Add a dropdown that can filter journeys by status (`PENDING` | `COMPLETED` | `ALL`).
1. You may use this `inbound` field value (explained above) to enhance the user experience for the driver in any way you see fit. 
1. Create unit tests for the important functionality that you have added. 
1. You should use `scss` for some basic styling to make the interface look neat

### Questions?
Send any questions to us and we will be happy to clarify them for you.
