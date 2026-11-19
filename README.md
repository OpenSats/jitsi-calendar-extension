Jidesha
=======

A Chrome extension for calendar integration (Google Calendar and Office 365).

## Configure the calendar meeting server

To install this fork locally, open `chrome://extensions`, enable Developer mode,
choose **Load unpacked**, and select the `calendar` directory from this repository.
Disable any other copy of Jitsi Meetings to avoid duplicate calendar buttons.

Open **Details → Extension options**, enter your Jitsi HTTPS URL, and save.
New meeting links use the saved server immediately. The default server is
`https://meet.jit.si/`. Use **Restore default** to switch back.

### Package a customized extension

For deployments that also need the Jitsi site to contact the extension, adapt the `manifest.json` file’s `externally_connectable`
URL:

    "matches": [
        "*://your.server.com/*"
    ]

Do not include any port information.

You might also want to edit the name, the description, the version or
to replace the icons.

Then, according to https://developer.chrome.com/extensions/packaging ,
go inside Chrome to "chrome://extensions", click on the Developer Mode,
and "Pack extension". The result is a CRX file and, if you do this for
the first time, a private key used for later updates.

### Install your own extension

Install your own extension into your Chrome. One way is to drag the
CRX file into the "chrome://extensions" window.

When Chrome shows it among your installed extensions,
you will also see its *hash ID*.

### Distribute your extension manually to your users

You can send the CRX file to your users and tell them how to
install it. For example, you might want to put it
directly onto your Jitsi Meet server (webroot in `/usr/share/jitsi-meet`).
This would only be helpful for downloading the extension, as
Chrome will not allow a direct installation from your site.
