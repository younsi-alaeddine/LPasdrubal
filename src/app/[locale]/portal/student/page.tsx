'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { 
  BookOpen, 
  Calendar, 
  FileText, 
  Users, 
  Award, 
  Clock,
  TrendingUp,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';

export default function StudentPortalPage() {
  const t = useTranslations('studentPortal');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de connexion
    if (loginData.username && loginData.password) {
      setIsLoggedIn(true);
    }
  };

  const studentData = {
    name: "Ahmed Ben Ali",
    class: "3ème année Sciences",
    studentId: "ASD2024001",
    photo: "/images/students/ahmed-ben-ali.jpg"
  };

  const grades = [
    { subject: "Mathématiques", grade: 16.5, coefficient: 4 },
    { subject: "Physique-Chimie", grade: 15.0, coefficient: 3 },
    { subject: "Sciences de la Vie", grade: 17.0, coefficient: 3 },
    { subject: "Français", grade: 14.5, coefficient: 4 },
    { subject: "Anglais", grade: 16.0, coefficient: 2 },
    { subject: "Arabe", grade: 15.5, coefficient: 2 },
    { subject: "Histoire-Géographie", grade: 13.5, coefficient: 2 }
  ];

  const schedule = [
    { day: "Lundi", courses: ["Mathématiques", "Physique", "Français", "Anglais"] },
    { day: "Mardi", courses: ["SVT", "Mathématiques", "Arabe", "Histoire"] },
    { day: "Mercredi", courses: ["Français", "Physique", "Anglais", "Mathématiques"] },
    { day: "Jeudi", courses: ["SVT", "Arabe", "Mathématiques", "Histoire"] },
    { day: "Vendredi", courses: ["Physique", "Français", "Anglais", "SVT"] }
  ];

  const activities = [
    { name: "Club de Robotique", day: "Mercredi", time: "16h-18h", status: "Actif" },
    { name: "Football", day: "Lundi/Vendredi", time: "16h-18h", status: "Actif" },
    { name: "Théâtre", day: "Mardi", time: "15h-17h", status: "Actif" }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">Espace Élève</CardTitle>
            <CardDescription>
              Connectez-vous pour accéder à vos informations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                placeholder="Nom d'utilisateur"
                value={loginData.username}
                onChange={(e) => setLoginData({...loginData, username: e.target.value})}
                required
              />
              <Input
                type="password"
                placeholder="Mot de passe"
                value={loginData.password}
                onChange={(e) => setLoginData({...loginData, password: e.target.value})}
                required
              />
              <Button type="submit" className="w-full">
                Se connecter
              </Button>
            </form>
            <div className="mt-4 text-center text-sm text-gray-500">
              <p>Mot de passe oublié ? <a href="#" className="text-blue-600 hover:underline">Cliquez ici</a></p>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-blue-600">AB</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">{studentData.name}</h1>
              <p className="text-blue-100">{studentData.class}</p>
              <p className="text-blue-200 text-sm">ID: {studentData.studentId}</p>
            </div>
            <div className="ml-auto">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => setIsLoggedIn(false)}
              >
                Se déconnecter
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Notes */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <span>Mes Notes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {grades.map((grade, index) => (
                    <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <h4 className="font-medium">{grade.subject}</h4>
                        <p className="text-sm text-gray-500">Coefficient: {grade.coefficient}</p>
                      </div>
                      <div className="text-right">
                        <span className={`text-2xl font-bold ${grade.grade >= 16 ? 'text-green-600' : grade.grade >= 12 ? 'text-yellow-600' : 'text-red-600'}`}>
                          {grade.grade}/20
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Moyenne Générale</span>
                    <span className="text-2xl font-bold text-blue-600">15.8/20</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Emploi du temps */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <span>Emploi du Temps</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {schedule.map((day, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-medium text-gray-900">{day.day}</h4>
                      <div className="space-y-1 mt-2">
                        {day.courses.map((course, courseIndex) => (
                          <p key={courseIndex} className="text-sm text-gray-600">{course}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Activités */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-purple-600" />
                  <span>Mes Activités</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {activities.map((activity, index) => (
                    <div key={index} className="p-3 bg-gray-50 rounded-lg">
                      <h4 className="font-medium">{activity.name}</h4>
                      <p className="text-sm text-gray-600">{activity.day} - {activity.time}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${
                        activity.status === 'Actif' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'
                      }`}>
                        {activity.status}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
