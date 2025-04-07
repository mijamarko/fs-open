```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: When clicking on save, the note gets appended to the notes array.
    Note right of browser: After that, it gets POST-ed to the server without the need for reloading the page
    browser->>+server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    server->>-browser: 201 Created
``` 
    