'use client';

import { useTranslations } from 'next-intl';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { 
  GraduationCap, 
  Calendar, 
  Users, 
  BookOpen, 
  MessageCircle,
  TrendingUp,
  Clock,
  FileText
} from 'lucide-react';
import { useState } from 'react';

export default function TeacherPortalPage() {
  const t = useTranslations('teacherPortal');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulation de connexion
    if (loginData.email && loginData.password) {
      setIsLoggedIn(true);
    }
  };

  const teacherData = {
    name: "Mme. Fatma Ben Ali",
    subject: "Mathématiques",
    department: "Sciences",
    employeeId: "EMP2024001"
  };

  const classes = [
    { name: "3ème Sciences A", students: 28, schedule: "Lun-Mer-Ven 8h-10h" },
    { name: "2ème Sciences B", students: 25, schedule: "Mar-Jeu 14h-16h" },
    { name: "1ère Sciences C", students: 30, schedule: "Lun-Mer 10h-12h" }
  ];

  const upcomingTasks = [
    { task: "Correction devoir 3ème A", deadline: "2024-01-20", priority: "Haute" },
    { task: "Préparation cours 2ème B", deadline: "2024-01-22", priority: "Moyenne" },
    { task: "Réunion parents 1ère C", deadline: "2024-01-25", priority: "Haute" }
  ];

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <GraduationCap className="w-10 h-10 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">Espace Professeur</CardTitle>
            <CardDescription>
              Connectez-vous pour accéder à votre espace de travail
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <Input
                type="email"
                placeholder="Email professionnel"
                value={loginData.email}
                onChange={(e) => setLoginData({...loginData, email: e.target.value})}
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
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-green-600">FB</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold">{teacherData.name}</h1>
              <p className="text-green-100">{teacherData.subject} - {teacherData.department}</p>
              <p className="text-green-200 text-sm">ID: {teacherData.employeeId}</p>
            </div>
            <div className="ml-auto">
              <Button 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-green-600"
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
          {/* Classes */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="w-6 h-6 text-blue-600" />
                  <span>Mes Classes</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {classes.map((classItem, index) => (
                    <Card key={index} className="border-l-4 border-blue-500">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-lg">{classItem.name}</CardTitle>
                        <CardDescription>{classItem.students} élèves</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="space-y-2">
                          <div className="flex items-center space-x-2 text-sm text-gray-600">
                            <Clock className="w-4 h-4" />
                            <span>{classItem.schedule}</span>
                          </div>
                          <div className="flex space-x-2 mt-4">
                            <Button size="sm" className="flex-1">Voir les élèves</Button>
                            <Button size="sm" variant="outline" className="flex-1">Notes</Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Tâches */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <FileText className="w-6 h-6 text-orange-600" />
                  <span>Tâches à Faire</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {upcomingTasks.map((task, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <h4 className="font-medium">{task.task}</h4>
                      <p className="text-sm text-gray-600 mt-1">Échéance: {task.deadline}</p>
                      <span className={`inline-block px-2 py-1 rounded-full text-xs font-medium mt-2 ${
                        task.priority === 'Haute' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {task.priority}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Statistiques */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                  <span>Statistiques</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Total élèves</span>
                    <span className="font-bold text-xl">83</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Classes</span>
                    <span className="font-bold text-xl">3</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Moyenne générale</span>
                    <span className="font-bold text-xl text-green-600">15.2/20</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
