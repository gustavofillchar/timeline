## Running the Project

1. Navigate to the project directory
2. Run `npm install` to install dependencies
3. Run `npm start` to initialize and connect to a node server with your default browser
4. The application will render the sample data from `src/timelineItems.js`
5. Demo version https://timeline-592s.vercel.app

## Implementation Overview

### What I Like About My Implementation

I'm happy with the component-based approach I took. Breaking the timeline into smaller, reusable components made the code much easier to read and maintain. I kept the folder structure simple and organized, which I think works well for a project of this complexity. Date handling is always tricky, but I think I found a good balance between keeping things simple and making them work properly.

### What I Would Change If Doing It Again

I initially tried to build something too complex for the time I had available. I ended up having to go back and simplify things, which wasted valuable time. If I could do it over, I would:
- Start with a simpler approach and build up from there
- Focus on getting the core features working before adding extras
- Save more time for the extra features I didn't get to implement

### Design Decisions

I took inspiration from tools I use every day like Notion and Jira. My goal was to create something clean, functional, and user-friendly. Since I have some UI design experience, I tried to make the interface intuitive and familiar - something users could understand right away without needing instructions.

### Testing Strategy (With More Time)

If I had more time, I would definitely add:
- Unit tests for each component to make sure they work correctly;
- Pay more attention to responsive design, ensuring the timeline works well on mobile devices;

## Features Implemented

- Efficient lane assignment algorithm for space optimization
- Responsive timeline grid with date headers
- Visual representation of overlapping and non-overlapping items
- Zoom context implementation (partial)
