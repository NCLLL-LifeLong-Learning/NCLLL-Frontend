import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';
import FontFamily from '@tiptap/extension-font-family';
import FontSize from '@tiptap/extension-font-size';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import Highlight from '@tiptap/extension-highlight';
import TaskList from '@tiptap/extension-task-list';
import TaskItem from '@tiptap/extension-task-item';
import Table from '@tiptap/extension-table';
import TableRow from '@tiptap/extension-table-row';
import TableCell from '@tiptap/extension-table-cell';
import TableHeader from '@tiptap/extension-table-header';
import CharacterCount from '@tiptap/extension-character-count';
import { useEffect } from 'react';

// const jsonData = {
//   type: "doc",
//   "content": [
//     {
//       "type": "heading",
//       "attrs": {
//         "textAlign": null,
//         "level": 1
//       },
//       "content": [
//         {
//           "type": "text",
//           "marks": [
//             {
//               "type": "bold"
//             }
//           ],
//           "text": "How to send data from Client to Server with Laravel Echo"
//         }
//       ]
//     },
//     {
//       "type": "paragraph",
//       "attrs": {
//         "textAlign": null
//       },
//       "content": [
//         {
//           "type": "text",
//           "text": "Laravel comes with a good implementation of WebSocket. It’s easy to broadcast information to the users and between clients. You could simply write a good real-time web application using these features."
//         }
//       ]
//     },
//     {
//       "type": "heading",
//       "attrs": {
//         "textAlign": null,
//         "level": 1
//       },
//       "content": [
//         {
//           "type": "text",
//           "marks": [
//             {
//               "type": "bold"
//             }
//           ],
//           "text": "The Problem"
//         }
//       ]
//     },
//     {
//       "type": "paragraph",
//       "attrs": {
//         "textAlign": null
//       },
//       "content": [
//         {
//           "type": "text",
//           "text": "Originally the WebSocket protocol is based on full-duplex communication channels. Laravel only implements message delivery from server-to-client. There is no way to send data from client-to-server through the WebSocket Server. Nevertheless, this featureless makes the framework more secure: if the code written on client-side is not well accomplished some security and server-balance issues could come up. That’s why you should be very careful when you work on client-to-server data sending."
//         }
//       ]
//     },
//     {
//       "type": "heading",
//       "attrs": {
//         "textAlign": null,
//         "level": 1
//       },
//       "content": [
//         {
//           "type": "text",
//           "marks": [
//             {
//               "type": "bold"
//             }
//           ],
//           "text": "What we have"
//         }
//       ]
//     },
//     {
//       "type": "paragraph",
//       "attrs": {
//         "textAlign": null
//       },
//       "content": [
//         {
//           "type": "text",
//           "text": "When we are broadcasting the data is published to a Redis Channel, the Socket server subscribed to that and listening for any changes. If something happens the Socker server will send the data to the client-side."
//         }
//       ]
//     },
//     {
//       "type": "image",
//       "attrs": {
//         "src": "https://miro.medium.com/v2/resize:fit:720/format:webp/1*MFxXMNBFMdt4wqvuS-_WsQ.png",
//         "alt": "",
//         "title": null
//       }
//     },
//     {
//       "type": "heading",
//       "attrs": {
//         "textAlign": null,
//         "level": 1
//       },
//       "content": [
//         {
//           "type": "text",
//           "marks": [
//             {
//               "type": "bold"
//             }
//           ],
//           "text": "The Concept"
//         }
//       ]
//     },
//     {
//       "type": "paragraph",
//       "attrs": {
//         "textAlign": null
//       },
//       "content": [
//         {
//           "type": "text",
//           "text": "In the first view, it seems like Laravel only implements the server-to-client communication, but this is half true. There is the "
//         },
//         {
//           "type": "text",
//           "marks": [
//             {
//               "type": "italic"
//             }
//           ],
//           "text": "whispering"
//         },
//         {
//           "type": "text",
//           "text": " function, which is used for client-to-client message sending. The Socket server processes the data and sends it to the other client, who is also joined to the channel."
//         },
//         {
//           "type": "hardBreak"
//         }
//       ]
//     },
//     {
//       "type": "image",
//       "attrs": {
//         "src": "https://miro.medium.com/v2/resize:fit:720/format:webp/1*gOhoofi5mQ_V9BRrxLV3fw.png",
//         "alt": "",
//         "title": null
//       }
//     },
//     {
//       "type": "paragraph",
//       "attrs": {
//         "textAlign": null
//       },
//       "content": [
//         {
//           "type": "text",
//           "text": "We can grab this function and extend it with our solution. When the Socket server emits the data for the clients, it is also published to the Redis channel. Later, we should write a CLI command that is subscribed to the specific channel and correctly process."
//         }
//       ]
//     },
//     {
//       "type": "image",
//       "attrs": {
//         "src": "https://miro.medium.com/v2/resize:fit:720/format:webp/1*tjHTBRcNGojuekjxQK7AiQ.png",
//         "alt": "",
//         "title": null
//       }
//     },
//     {
//       "type": "heading",
//       "attrs": {
//         "textAlign": null,
//         "level": 1
//       },
//       "content": [
//         {
//           "type": "text",
//           "marks": [
//             {
//               "type": "bold"
//             }
//           ],
//           "text": "The Implementation"
//         }
//       ]
//     },
//     {
//       "type": "paragraph",
//       "attrs": {
//         "textAlign": null
//       },
//       "content": [
//         {
//           "type": "text",
//           "text": "We will use the Laravel Echo & Redis & Laravel-Echo-Server trio. Although we will use a "
//         },
//         {
//           "type": "text",
//           "marks": [
//             {
//               "type": "link",
//               "attrs": {
//                 "href": "https://github.com/tthdvd/laravel-echo-server",
//                 "target": "_blank",
//                 "rel": "noopener ugc nofollow",
//                 "class": "ag jx"
//               }
//             }
//           ],
//           "text": "fork of Laravel-Echo-Server"
//         },
//         {
//           "type": "text",
//           "text": " that is capable to publish data to the Redis channel: when the Echo "
//         },
//         {
//           "type": "text",
//           "marks": [
//             {
//               "type": "italic"
//             }
//           ],
//           "text": "whispering"
//         },
//         {
//           "type": "text",
//           "text": " method is called, the Socket Server not just forwarding the message to other clients the data will be also published to the specific Redis channel (same as which it’s reading)."
//         }
//       ]
//     },
//     {
//       "type": "paragraph",
//       "attrs": {
//         "textAlign": null
//       },
//       "content": [
//         {
//           "type": "text",
//           "text": "After you downloaded and configured the server start it:"
//         }
//       ]
//     },
//     {
//       "type": "codeBlock",
//       "attrs": {
//         "language": null
//       },
//       "content": [
//         {
//           "type": "text",
//           "text": "node bin/server.js start"
//         }
//       ]
//     }
//   ]
// };


const TiptapEditor = ({ jsonData }) => {
  console.log("jsonData = ", jsonData);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
      TextStyle,
      Color,
      FontFamily,
      FontSize,
      Link.configure({ openOnClick: true }),
      Image,
      Highlight,
      TaskList,
      TaskItem,
      Table.configure({ resizable: true }),
      TableRow,
      TableCell,
      TableHeader,
      CharacterCount
    ],
    content: jsonData, // Initialize with JSON from admin
    editable: false, // Read-only mode for frontend
  });

  useEffect(() => {
    if (editor && jsonData) {
      editor.commands.setContent(jsonData);
    }
  }, [jsonData, editor]);

  return <EditorContent editor={editor} />;
};

export default TiptapEditor;