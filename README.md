# Realty Mogul React + Redux SPA

### Run instructions
- Clone this repo and open
- run: npm install --save
- run: npm run start

### Technologies Used
- React to create 4 components: App, Header, Content, Panel
- Redux store and reducer to handle state updates for two main actions formatData and togglePannel
- CSS Flexbox for simple Header and Content Component layouts.


### Development Approach
- App.js dispatches an action to the reducer on ComponentDidMont() to format our JSON string and update state. This is where we could also safely make any Ajax calls before updating state.
- Header and Content Components use the same togglePanel action to toggle the Panels.
- Toggle is applied with conditional classes in Content Component

### Next Steps
- Find a more efficient way to refactor Content component as a lot of the same props and logic is being used for the Panel
