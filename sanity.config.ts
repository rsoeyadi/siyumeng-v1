import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { vercelDeployTool } from 'sanity-plugin-vercel-deploy'
import schemas from './sanity';

const config = defineConfig({
    projectId: "q3022i9l",
    dataset: "production",
    title: "Siyumeng Wang | Piano",
    apiVersion: "2023-08-09",
    basePath: "/admin",
    plugins: [deskTool(), vercelDeployTool(),
],
    schema: { types: schemas }
})

export default config