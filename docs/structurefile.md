# Structure File
## Estrutura atual do projeto em Next 14.2.5:

src
    app
        (pages)
            page.tsx
            dashboard/
                page.tsx
                layout.tsx
            upload/
                page.tsx
                layout.tsx
            edit-text/
                [id]/
                    page.tsx
                    layout.tsx
        api
            auth
                [...nextauth]
                    route.ts
            text
                create
                    route.ts
                update
                    route.ts
            upload
                route.ts
        favicon.ico
        global.css
        layout.tsx
    components
        ui
            button.tsx
            input.tsx
            toast.tsx
            table.tsx
        dashboard
            text-table.tsx
        upload
            image-upload.tsx
        edit-text
            text-editor.tsx
    hooks
        use-mobile.tsx
        use-toast.ts
    lib
        utils.ts