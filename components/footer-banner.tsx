import {Button} from "@/components/ui/button"
import {Card, CardContent, CardFooter, CardHeader, CardTitle,} from "@/components/ui/card"
import Link from "next/link";

export function FooterBanner() {
    return (
        <Card size="sm" className="mx-auto w-full max-w-sm">
            <CardHeader>
                <CardTitle>FYP!</CardTitle>
            </CardHeader>
            <CardContent>
                <p>
                    Available on NotebookLM
                </p>
            </CardContent>
            <CardFooter>
                <Link className="w-full" href="https://notebooklm.google.com/notebook/bb092e56-7133-4046-a68d-f9a00ad9afac">
                    <Button variant="outline" size="sm" className="w-full">
                        View
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    )
}
