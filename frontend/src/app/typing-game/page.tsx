'use client'

import { useState, useEffect, useCallback } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { TypingInput } from '@/components/ui/typing-input'
import { generateSentence } from './api/route'

export default function TypingGame() {
  const [words, setWords] = useState<string>('')
  const [input, setInput] = useState<string>('')
  const [startTime, setStartTime] = useState<number | null>(null)
  const [isFinished, setIsFinished] = useState<boolean>(false)
  const [wpm, setWpm] = useState<number>(0)

  const startGame = useCallback(async () => {
    const newWords = await generateSentence()
    setWords(newWords[0])
    setInput('')
    setStartTime(null)
    setIsFinished(false)
    setWpm(0)
  }, [generateSentence])

  const calculateWPM = (endTime: number) => {
    if (!startTime) return 0
    const timeInSeconds = (endTime - startTime) / 1000
    const timeInMinutes = timeInSeconds / 60
    const wordCount = words.split(' ').length
    return Math.round(wordCount / timeInMinutes)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    if (!startTime && value) {
      setStartTime(Date.now())
    }
    
    setInput(value)
    
    if (value === words) {
      const endTime = Date.now()
      setWpm(calculateWPM(endTime))
      setIsFinished(true)
    }
  }

  const renderWords = () => {
    return words.split('').map((char, index) => {
      let className = 'font-mono'
      
      if (index < input.length) {
        className += input[index] === char 
          ? ' text-green-500' 
          : ' text-red-500 bg-red-100'
      }
      
      return (
        <span key={index} className={className}>
          {char}
        </span>
      )
    })
  }

  useEffect(() => {
    startGame()
  }, [startGame])

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <Card className="w-full max-w-2xl">
        <CardHeader>
          <CardTitle className="text-center">Typing Speed Test</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="text-xl p-4 bg-muted rounded-md tracking-wide leading-relaxed">
            {renderWords()}
          </div>
          
          <TypingInput
            value={input}
            onChange={handleInputChange}
            disabled={isFinished}
            placeholder="Start typing..."
          />
          
          {isFinished && (
            <div className="text-center space-y-4">
              <p className="text-2xl font-bold">Your speed: {wpm} WPM</p>
              <Button onClick={() => startGame()}>
                Try Again
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </main>
  )
}