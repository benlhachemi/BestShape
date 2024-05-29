'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState, useEffect } from 'react'

export default function CopyLink({ params }: { params: any }) {
  const [is_copied, setIsCopied] = useState<boolean>(false)

  useEffect(() => {
    if (is_copied) {
      setTimeout(() => {
        setIsCopied(false)
      }, 3000)
    }
  }, [is_copied])

  const copy = () => {
    navigator.clipboard.writeText(`https://trajneri.com/program/${params.slug}`)
    setIsCopied(true)
  }

  return (
    <Card className="max-w-lg bg-neutral-50 overflow-hidden">
      <CardHeader>
        <CardTitle>Shpërndajeni këtë program</CardTitle>
        <CardDescription>Çdokush mund ta shikojë këtë program.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col lg:flex-row gap-2 items-center">
          <Input contentEditable={false} value={`https://trajneri.com/program/${params.slug}`} />
          <div className="relative">
            <Button onClick={copy} className="w-32">Kopjo</Button>
            {is_copied && (
              <div className="text-md text-neutral-400 absolute top-0 lg:-top-3/4 lg:animate__animated lg:animate__fadeInUp left-full lg:left-2/4 w-full translate-x-5 lg:translate-x-0">👍</div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
