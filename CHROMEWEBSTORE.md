# Chrome Web Store submission

**Name:** Jitsi Meetings (custom server)
**Visibility:** Unlisted
**Category:** Workflow & Planning
**Language:** English

## Listing description

Add a Jitsi room to a Google Calendar invitation from the quick-create dialog or the full event editor. New rooms use the OpenSats Jitsi server. Choose a different HTTPS server in Settings at any time. Saved invitations keep their original links.

If you already use another copy of Jitsi Meetings, disable it before using this extension.

## Purpose and permissions

The extension’s single purpose is to add Jitsi meeting links to Google Calendar events.

- **Storage.** Save the selected server and recognize previously selected servers in existing invitations. Settings are local to the Chrome profile.
- **Calendar site access.** A static content script runs on `https://calendar.google.com/calendar/*` to display the meeting action and read or update the event’s location and description. Calendar’s page can load the two packaged icons used in these controls.
- **Remote code.** All JavaScript, including the bundled jQuery slim library, ships inside the extension. Room names are generated locally.
- **Privacy policy.** https://github.com/OpenSats/jitsi-calendar-extension/blob/master/PRIVACY.md

## Reviewer walkthrough

1. Sign in to Google Calendar. Create an event and choose **Add Jitsi meeting**. In quick-create, this opens the full event editor.
2. Check the description and the **Join with Jitsi** row for a room on `jitsi.opensats.org`. The draft can be discarded after testing.
3. Open the extension’s **Settings**, save another HTTPS server, and add a meeting to a fresh event to verify the new host. Use **Restore default** to reset it.

The listing screenshots show the quick-create dialog, full event editor, and settings. The publisher selects **Unlisted** under Distribution before submitting the ZIP for review.
