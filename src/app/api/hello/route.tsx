/**
 * @swagger
 * /api/hello:
 *   get:
 *     description: Returns the hello world
 *     responses:
 *       200:
 *         description: hello world
 */
export const runtime = 'edge';
export async function GET(){
    // throw new Error("noooooo")
    return new Response('Hello, firdaus')
}