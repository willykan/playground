import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <main className="text-center">
      <Card>
        <CardHeader>
          <CardTitle className="text-center">Welcome!</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-center">
            Select an item from the sidebar to get started
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
