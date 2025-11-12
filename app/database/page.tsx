"use client";
import React, { useState } from 'react';
import { Database, Table, Key, Link, Users, MessageSquare, FileText, Shield, UserPlus, Settings } from 'lucide-react';

export default function XENDDatabaseSchema() {
  const [selectedTable, setSelectedTable] = useState(null);

  const tables = [
    {
      name: 'users',
      icon: Users,
      color: 'bg-blue-500',
      description: 'Almacena la información principal de todos los usuarios de la plataforma',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único del usuario' },
        { name: 'user_code', type: 'integer', key: 'UNIQUE', description: 'Código institucional del usuario' },
        { name: 'name', type: 'varchar', description: 'Nombre del usuario' },
        { name: 'lastname', type: 'varchar', description: 'Apellido del usuario' },
        { name: 'email', type: 'varchar', key: 'UNIQUE', description: 'Correo electrónico institucional' },
        { name: 'user_image_path', type: 'text', description: 'Ruta de la imagen de perfil' },
        { name: 'user_description', type: 'text', description: 'Descripción personal (máx. 100 caracteres)' }
      ],
      relations: ['user_roles', 'subject_enrollments', 'messages', 'direct_chats', 'group_members', 'friends']
    },
    {
      name: 'roles',
      icon: Shield,
      color: 'bg-purple-500',
      description: 'Define los diferentes roles de usuario en el sistema',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único del rol' },
        { name: 'role_name', type: 'varchar', key: 'UNIQUE', description: 'Nombre del rol: student, teacher, admin' }
      ],
      relations: ['user_roles']
    },
    {
      name: 'user_roles',
      icon: Settings,
      color: 'bg-indigo-500',
      description: 'Tabla de relación entre usuarios y roles (muchos a muchos)',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único de la relación' },
        { name: 'user_id', type: 'uuid', key: 'FK', description: 'Referencia al usuario' },
        { name: 'role_id', type: 'uuid', key: 'FK', description: 'Referencia al rol' }
      ],
      relations: ['users', 'roles']
    },
    {
      name: 'subjects',
      icon: FileText,
      color: 'bg-green-500',
      description: 'Contiene la información de las materias o asignaturas',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único de la materia' },
        { name: 'nrc', type: 'integer', description: 'Número de Referencia del Curso' },
        { name: 'subject_name', type: 'varchar', description: 'Nombre de la materia' },
        { name: 'section', type: 'varchar', description: 'Sección de la materia (ej: D06)' }
      ],
      relations: ['subject_enrollments']
    },
    {
      name: 'subject_enrollments',
      icon: UserPlus,
      color: 'bg-teal-500',
      description: 'Registra las inscripciones de estudiantes a materias',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único de la inscripción' },
        { name: 'user_id', type: 'uuid', key: 'FK', description: 'Referencia al estudiante' },
        { name: 'subject_id', type: 'uuid', key: 'FK', description: 'Referencia a la materia' },
        { name: 'schedule', type: 'varchar', description: 'Horario de la materia' }
      ],
      relations: ['users', 'subjects']
    },
    {
      name: 'messages',
      icon: MessageSquare,
      color: 'bg-orange-500',
      description: 'Almacena todos los mensajes enviados en la plataforma',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único del mensaje' },
        { name: 'sender_id', type: 'uuid', key: 'FK', description: 'Usuario que envió el mensaje' },
        { name: 'content', type: 'text', description: 'Contenido del mensaje' },
        { name: 'timestamp', type: 'timestamp', description: 'Fecha y hora de envío' },
        { name: 'status', type: 'varchar', description: 'Estado: sent, delivered, read' },
        { name: 'image_path', type: 'text', description: 'Ruta de imagen adjunta' },
        { name: 'file_path', type: 'varchar', description: 'Ruta de archivo adjunto' },
        { name: 'video_path', type: 'text', description: 'Ruta de video adjunto' },
        { name: 'type', type: 'text', description: 'Tipo de mensaje' }
      ],
      relations: ['users', 'direct_chat_messages', 'group_chat_messages', 'community_chat_messages']
    },
    {
      name: 'chats',
      icon: MessageSquare,
      color: 'bg-pink-500',
      description: 'Tabla general de chats (directos, grupos, comunidades)',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único del chat' },
        { name: 'chat_type', type: 'varchar', description: 'Tipo: direct, group, community' },
        { name: 'chat_name', type: 'varchar', description: 'Nombre del chat' },
        { name: 'image_path', type: 'varchar', description: 'Imagen del chat' },
        { name: 'created_at', type: 'timestamp', description: 'Fecha de creación' }
      ],
      relations: ['chat_participants']
    },
    {
      name: 'chat_participants',
      icon: Users,
      color: 'bg-cyan-500',
      description: 'Participantes de cada chat con sus roles',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único' },
        { name: 'chat_id', type: 'uuid', key: 'FK', description: 'Referencia al chat' },
        { name: 'user_id', type: 'uuid', key: 'FK', description: 'Referencia al usuario' },
        { name: 'joined_at', type: 'timestamp', description: 'Fecha de ingreso' },
        { name: 'role', type: 'varchar', description: 'Rol: member, admin, block' }
      ],
      relations: ['chats', 'users']
    },
    {
      name: 'direct_chats',
      icon: MessageSquare,
      color: 'bg-blue-400',
      description: 'Chats directos entre dos usuarios',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único del chat directo' },
        { name: 'user1_id', type: 'uuid', key: 'FK', description: 'Primer usuario' },
        { name: 'user2_id', type: 'uuid', key: 'FK', description: 'Segundo usuario' },
        { name: 'created_at', type: 'timestamp', description: 'Fecha de creación' }
      ],
      relations: ['users', 'direct_chat_messages', 'direct_chat_files']
    },
    {
      name: 'direct_chat_messages',
      icon: MessageSquare,
      color: 'bg-sky-500',
      description: 'Relación entre chats directos y mensajes',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único' },
        { name: 'direct_chat_id', type: 'uuid', key: 'FK', description: 'Referencia al chat directo' },
        { name: 'message_id', type: 'uuid', key: 'FK', description: 'Referencia al mensaje' }
      ],
      relations: ['direct_chats', 'messages']
    },
    {
      name: 'group_chats',
      icon: Users,
      color: 'bg-emerald-500',
      description: 'Grupos de chat académicos',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único del grupo' },
        { name: 'group_name', type: 'varchar', description: 'Nombre del grupo' },
        { name: 'image_path', type: 'text', description: 'Imagen del grupo' },
        { name: 'created_at', type: 'timestamp', description: 'Fecha de creación' },
        { name: 'members', type: 'numeric', description: 'Cantidad de miembros' },
        { name: 'description', type: 'text', description: 'Descripción del grupo' },
        { name: 'owner_id', type: 'uuid', key: 'FK', description: 'Propietario del grupo' }
      ],
      relations: ['group_members', 'group_chat_messages', 'group_chat_files']
    },
    {
      name: 'group_members',
      icon: UserPlus,
      color: 'bg-lime-500',
      description: 'Miembros de los grupos de chat',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único' },
        { name: 'created_at', type: 'timestamp', description: 'Fecha de ingreso' },
        { name: 'group_id', type: 'uuid', key: 'FK', description: 'Referencia al grupo' },
        { name: 'user_id', type: 'uuid', key: 'FK', description: 'Referencia al usuario' },
        { name: 'status', type: 'uuid', key: 'FK', description: 'Estado del miembro' }
      ],
      relations: ['group_chats', 'users', 'group_status']
    },
    {
      name: 'group_status',
      icon: Settings,
      color: 'bg-amber-500',
      description: 'Estados posibles para miembros de grupos',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único' },
        { name: 'status', type: 'text', description: 'Nombre del estado' }
      ],
      relations: ['group_members']
    },
    {
      name: 'community_chats',
      icon: Users,
      color: 'bg-violet-500',
      description: 'Comunidades o canales institucionales',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único' },
        { name: 'community_name', type: 'varchar', description: 'Nombre de la comunidad' },
        { name: 'image_path', type: 'varchar', description: 'Imagen de la comunidad' },
        { name: 'created_at', type: 'timestamp', description: 'Fecha de creación' }
      ],
      relations: ['community_chat_messages', 'community_chat_files']
    },
    {
      name: 'friends',
      icon: Users,
      color: 'bg-rose-500',
      description: 'Relaciones de amistad entre usuarios',
      columns: [
        { name: 'user_id', type: 'uuid', key: 'PK/FK', description: 'Usuario 1' },
        { name: 'friend_id', type: 'uuid', key: 'PK/FK', description: 'Usuario 2' },
        { name: 'created_at', type: 'timestamp', description: 'Fecha de amistad' }
      ],
      relations: ['users']
    },
    {
      name: 'friend_request',
      icon: UserPlus,
      color: 'bg-fuchsia-500',
      description: 'Solicitudes de amistad pendientes o procesadas',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único' },
        { name: 'created_at', type: 'timestamp', description: 'Fecha de solicitud' },
        { name: 'sender_id', type: 'uuid', key: 'FK', description: 'Usuario que envía' },
        { name: 'receiver_id', type: 'uuid', key: 'FK', description: 'Usuario que recibe' },
        { name: 'status', type: 'uuid', key: 'FK', description: 'Estado de la solicitud' }
      ],
      relations: ['users', 'status_friend_request']
    },
    {
      name: 'status_friend_request',
      icon: Settings,
      color: 'bg-red-500',
      description: 'Estados de las solicitudes de amistad',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único' },
        { name: 'status', type: 'text', description: 'Estado: pending, accepted, rejected' }
      ],
      relations: ['friend_request']
    },
    {
      name: 'files',
      icon: FileText,
      color: 'bg-yellow-500',
      description: 'Archivos adjuntos en la plataforma',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único' },
        { name: 'file_path', type: 'varchar', description: 'Ruta del archivo' },
        { name: 'file_type', type: 'varchar', description: 'Tipo de archivo' },
        { name: 'uploaded_at', type: 'timestamp', description: 'Fecha de subida' },
        { name: 'uploader_id', type: 'uuid', key: 'FK', description: 'Usuario que subió el archivo' }
      ],
      relations: ['users', 'direct_chat_files', 'group_chat_files', 'community_chat_files']
    },
    {
      name: 'reports_user',
      icon: Shield,
      color: 'bg-red-600',
      description: 'Reportes de usuarios por comportamiento inapropiado',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único' },
        { name: 'reported_user_id', type: 'uuid', key: 'FK', description: 'Usuario reportado' },
        { name: 'report_text', type: 'text', description: 'Descripción del reporte' },
        { name: 'created_at', type: 'timestamp', description: 'Fecha del reporte' },
        { name: 'reporter_user_id', type: 'uuid', key: 'FK', description: 'Usuario que reporta' },
        { name: 'report_option', type: 'uuid', key: 'FK', description: 'Tipo de reporte' }
      ],
      relations: ['users', 'report_user_options']
    },
    {
      name: 'report_user_options',
      icon: Settings,
      color: 'bg-orange-600',
      description: 'Opciones predefinidas para reportes de usuarios',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único' },
        { name: 'report_option', type: 'text', description: 'Descripción de la opción' },
        { name: 'ico', type: 'text', description: 'Icono emoji (máx. 10 caracteres)' }
      ],
      relations: ['reports_user']
    },
    {
      name: 'report_app_error',
      icon: Shield,
      color: 'bg-gray-600',
      description: 'Registro de errores de la aplicación',
      columns: [
        { name: 'id', type: 'uuid', key: 'PK', description: 'Identificador único' },
        { name: 'error_message', type: 'text', description: 'Mensaje de error' },
        { name: 'stack_trace', type: 'text', description: 'Traza del error' },
        { name: 'reported_at', type: 'timestamp', description: 'Fecha del error' }
      ],
      relations: []
    }
  ];

  const stats = {
    totalTables: tables.length,
    totalRelations: tables.reduce((acc, table) => acc + table.relations.length, 0),
    coreEntities: ['users', 'messages', 'chats', 'subjects'],
    securityTables: ['roles', 'user_roles', 'reports_user']
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Database className="w-8 h-8 text-blue-600" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-slate-800">
                Esquema de Base de Datos
              </h1>
              <p className="text-slate-600">
                XEND - Plataforma de Mensajería Académica Institucional
              </p>
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="bg-blue-50 rounded-lg p-4">
              <p className="text-2xl font-bold text-blue-600">{stats.totalTables}</p>
              <p className="text-sm text-slate-600">Tablas Totales</p>
            </div>
            <div className="bg-green-50 rounded-lg p-4">
              <p className="text-2xl font-bold text-green-600">{stats.totalRelations}</p>
              <p className="text-sm text-slate-600">Relaciones</p>
            </div>
            <div className="bg-purple-50 rounded-lg p-4">
              <p className="text-2xl font-bold text-purple-600">{stats.coreEntities.length}</p>
              <p className="text-sm text-slate-600">Entidades Core</p>
            </div>
            <div className="bg-orange-50 rounded-lg p-4">
              <p className="text-2xl font-bold text-orange-600">{stats.securityTables.length}</p>
              <p className="text-sm text-slate-600">Seguridad</p>
            </div>
          </div>
        </div>

        {/* Tables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
          {tables.map((table) => {
            const Icon = table.icon;
            return (
              <button
                key={table.name}
                onClick={() => setSelectedTable(table)}
                className={`bg-white rounded-lg shadow-md p-4 text-left transition-all hover:shadow-xl hover:scale-105 ${
                  selectedTable?.name === table.name ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`${table.color} p-2 rounded-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-slate-800">{table.name}</h3>
                    <p className="text-xs text-slate-500">{table.columns.length} columnas</p>
                  </div>
                </div>
                <p className="text-xs text-slate-600 line-clamp-2">{table.description}</p>
                {table.relations.length > 0 && (
                  <div className="mt-2 flex items-center gap-1 text-xs text-slate-500">
                    <Link className="w-3 h-3" />
                    <span>{table.relations.length} relaciones</span>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        {/* Selected Table Detail */}
        {selectedTable && (
          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`${selectedTable.color} p-3 rounded-lg`}>
                  <Table className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-slate-800">{selectedTable.name}</h2>
                  <p className="text-slate-600">{selectedTable.description}</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedTable(null)}
                className="text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>
            </div>

            {/* Columns */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-slate-800 mb-3">Columnas</h3>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-slate-200">
                      <th className="text-left py-2 px-3 text-sm font-semibold text-slate-700">Nombre</th>
                      <th className="text-left py-2 px-3 text-sm font-semibold text-slate-700">Tipo</th>
                      <th className="text-left py-2 px-3 text-sm font-semibold text-slate-700">Restricción</th>
                      <th className="text-left py-2 px-3 text-sm font-semibold text-slate-700">Descripción</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedTable.columns.map((column, idx) => (
                      <tr key={idx} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-3">
                          <div className="flex items-center gap-2">
                            {column.key && <Key className="w-4 h-4 text-yellow-500" />}
                            <code className="text-sm font-mono text-blue-600">{column.name}</code>
                          </div>
                        </td>
                        <td className="py-3 px-3 text-sm text-slate-600">{column.type}</td>
                        <td className="py-3 px-3">
                          {column.key && (
                            <span className="inline-block px-2 py-1 text-xs font-semibold rounded bg-yellow-100 text-yellow-800">
                              {column.key}
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-3 text-sm text-slate-600">{column.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Relations */}
            {selectedTable.relations.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-slate-800 mb-3">
                  Relaciones ({selectedTable.relations.length})
                </h3>
                <div className="flex flex-wrap gap-2">
                  {selectedTable.relations.map((relation, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        const relatedTable = tables.find(t => t.name === relation);
                        if (relatedTable) setSelectedTable(relatedTable);
                      }}
                      className="inline-flex items-center gap-2 px-3 py-2 bg-slate-100 hover:bg-slate-200 rounded-lg text-sm font-medium text-slate-700 transition-colors"
                    >
                      <Link className="w-4 h-4" />
                      {relation}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Technology Note */}
        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <div className="flex items-start gap-3">
            <Database className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900">
              <p className="font-semibold mb-1">Tecnología de Base de Datos</p>
              <p className="text-blue-700">
                Esta base de datos está implementada en <strong>PostgreSQL</strong> a través de <strong>Supabase</strong>, 
                proporcionando autenticación segura, APIs en tiempo real y escalabilidad para el sistema de mensajería académica.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}