## Course Project for Itransition

I used TypeScript, Next.js and a Supabase. For styles TailwindCSS and shadcn/ui

You have to implement a Web-application for personal collection management (books, post-stamps, coins, etc. — in the text below these are called items).
Non-authenticated users have read-only access (they can use search, but can’t create collections and items, can’t leave comments and likes).
Authenticated not-admins have access to everything except admin-page.
Only creator of the collections or items can manage them (edit; add; delete). Everything is accessible for viewing for everyone.
Users can register and authenticate via site forms.
Every user has its personal page where they can mange list of collections — each collection in the list is a link to the collection page that contains table of items and capabilities to create new item, edit or delete existing item.

Every collection contains: name, description, topic/category (one value from the predefined list, for example, “Books”, “Signs”, “Silverware”), optional image (uploaded by the users into the cloud).
All items have name and an optional image.

Main page contins:
list of lastest items (name, collection, author);
list of the top 5 largest collections;
