"use client"

import { useState } from "react"
import {
  Accordion, Alert, Avatar, Badge, Button, Card, Checkbox, ColorPicker,
  Divider, Dropdown, Icon, Input, Label, Modal, ProgressBar, Radio, ScrollArea,
  Select, Separator, Skeleton, Spinner, Stepper, Switch,   Tabs, Tag, Textarea,
  ToastContainer, toast, Toggle, Tooltip,
} from "@premier-js/components"

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-gray-200 rounded-xl p-6 space-y-4">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">{title}</h3>
      <div className="flex flex-wrap items-start gap-4">{children}</div>
    </div>
  )
}

export default function AtomsPage() {
  const [modalOpen, setModalOpen] = useState(false)
  const [tabValue, setTabValue] = useState("1")
  const [radioVal, setRadioVal] = useState("1")
  const [switchVal, setSwitchVal] = useState(false)
  const [toggleVal, setToggleVal] = useState(false)
  const [checkboxVal, setCheckboxVal] = useState(false)
  const [progress, setProgress] = useState(0)
  const [stepperActive, setStepperActive] = useState(1)

  return (
    <main className="min-h-screen bg-gray-50 py-10 px-6">
      <a href="/" className="text-sm text-blue-600 hover:underline mb-6 inline-block">← Retour</a>
      <h1 className="text-3xl font-bold text-gray-900 mb-10">Atomes</h1>

      <div className="max-w-6xl mx-auto space-y-8">
        <Section title="Button">
          <Button>Soumettre</Button>
          <Button disabled>Désactivé</Button>
        </Section>

        <Section title="Badge">
          <Badge>Nouveau</Badge>
          <Badge>Premium</Badge>
        </Section>

        <Section title="Tag">
          <Tag>React</Tag>
          <Tag removable onRemove={() => {}}>Fermer</Tag>
        </Section>

        <Section title="Card">
          <Card>Carte simple</Card>
        </Section>

        <Section title="Avatar">
          <Avatar initials="JD" />
          <Avatar initials="MC" />
        </Section>

        <Section title="Checkbox">
          <Checkbox checked={checkboxVal} onChange={setCheckboxVal} label="Accepter" />
        </Section>

        <Section title="Radio">
          <Radio options={[{ value: "1", label: "Option 1" }, { value: "2", label: "Option 2" }]} value={radioVal} onChange={setRadioVal} />
        </Section>

        <Section title="Switch">
          <Switch checked={switchVal} onChange={setSwitchVal} label="Activer" />
        </Section>

        <Section title="Toggle">
          <Toggle checked={toggleVal} onChange={setToggleVal} label="Toggle" />
        </Section>

        <Section title="Input">
          <Input placeholder="Votre email…" />
        </Section>

        <Section title="Textarea">
          <Textarea placeholder="Votre message…" />
        </Section>

        <Section title="Select">
          <Select options={[{ value: "1", label: "Option 1" }, { value: "2", label: "Option 2" }]} />
        </Section>

        <Section title="Label">
          <Label htmlFor="demo" required>Email</Label>
        </Section>

        <Section title="Separator">
          <Separator />
        </Section>

        <Section title="Divider">
          <Divider label="Ou" />
        </Section>

        <Section title="Icon">
          <Icon name="star" />
          <Icon name="check" color="#10b981" />
          <Icon name="x" color="#ef4444" />
          <Icon name="mail" />
        </Section>

        <Section title="Spinner">
          <Spinner />
        </Section>

        <Section title="Skeleton">
          <Skeleton width="200px" height="1rem" />
          <Skeleton width="150px" height="0.75rem" />
        </Section>

        <Section title="Tooltip">
          <Tooltip content="Info bulle">
            <span className="text-sm text-gray-600">Survolez-moi</span>
          </Tooltip>
        </Section>

        <Section title="Alert">
          <Alert title="Succès">Opération réussie</Alert>
          <Alert title="Erreur">Quelque chose a échoué</Alert>
        </Section>

        <Section title="ProgressBar">
          <ProgressBar value={progress} />
          <Button onClick={() => setProgress((p) => Math.min(100, p + 10))}>+10%</Button>
        </Section>

        <Section title="Accordion">
          <Accordion
            items={[
              { title: "Section 1", content: "Contenu détaillé 1" },
              { title: "Section 2", content: "Contenu détaillé 2" },
            ]}
          />
        </Section>

        <Section title="Tabs">
          <Tabs
            items={[
              { label: "Tab 1", value: "1", content: "Contenu A" },
              { label: "Tab 2", value: "2", content: "Contenu B" },
            ]}
            value={tabValue}
            onChange={setTabValue}
          />
        </Section>

        <Section title="Stepper">
          <Stepper
            steps={[
              { label: "Étape 1", description: "Description 1" },
              { label: "Étape 2", description: "Description 2" },
              { label: "Étape 3", description: "Description 3" },
            ]}
            currentStep={stepperActive} />
          <Button onClick={() => setStepperActive((s) => Math.min(3, s + 1))}>Suivant</Button>
        </Section>

        <Section title="Dropdown">
          <Dropdown
            trigger={<Button>Menu</Button>}
            items={[
              { label: "Profil", onClick: () => {} },
              { label: "Paramètres", onClick: () => {} },
              { label: "Déconnexion", onClick: () => {}, divider: true },
            ]}
          />
        </Section>

        <Section title="Modal">
          <Button onClick={() => setModalOpen(true)}>Ouvrir</Button>
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Dialogue">
            <p className="text-sm text-gray-600">Contenu du modal.</p>
          </Modal>
        </Section>

        <Section title="ColorPicker">
          <ColorPicker />
        </Section>

        <Section title="Toast">
          <Button onClick={() => toast.success("Message envoyé")}>Notification</Button>
          <ToastContainer />
        </Section>

        <Section title="ScrollArea">
          <div className="w-40 h-24">
            <ScrollArea maxHeight="100px">
              <div className="space-y-2 text-sm text-gray-600">
                {Array.from({ length: 10 }).map((_, i) => (
                  <p key={i}>Ligne de contenu {i + 1}</p>
                ))}
              </div>
            </ScrollArea>
          </div>
        </Section>
      </div>
    </main>
  )
}
