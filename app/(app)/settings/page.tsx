"use client";

import { useState } from "react";

const tabs = ["General", "Notifications", "Privacy", "Integrations"];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("General");

  return (
    <>
      <h1 className="text-2xl font-bold text-foreground">Settings</h1>
      <p className="mt-1 text-sm text-muted-foreground">Manage your account settings and preferences.</p>

      <div className="mt-8">
        <div className="flex gap-1 border-b border-border">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2.5 text-sm font-medium transition-colors ${
                activeTab === tab
                  ? "border-b-2 border-primary text-primary"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {activeTab === "General" && (
            <div className="space-y-8">
              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">Display</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">Distance unit</p>
                      <p className="text-xs text-muted-foreground">Choose between miles and kilometers.</p>
                    </div>
                    <select className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none">
                      <option>Miles</option>
                      <option>Kilometers</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">Map style</p>
                      <p className="text-xs text-muted-foreground">Choose your default map appearance.</p>
                    </div>
                    <select className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none">
                      <option>Standard</option>
                      <option>Satellite</option>
                      <option>Terrain</option>
                    </select>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">Language</p>
                      <p className="text-xs text-muted-foreground">Select your preferred language.</p>
                    </div>
                    <select className="rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground focus:border-primary focus:outline-none">
                      <option>English</option>
                      <option>Spanish</option>
                      <option>French</option>
                      <option>German</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <h3 className="text-lg font-semibold text-foreground">Account</h3>
                <div className="mt-4 space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">Change password</p>
                      <p className="text-xs text-muted-foreground">Update your account password.</p>
                    </div>
                    <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                      Update
                    </button>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">Two-factor authentication</p>
                      <p className="text-xs text-muted-foreground">Add an extra layer of security.</p>
                    </div>
                    <button className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted">
                      Enable
                    </button>
                  </div>
                </div>
              </div>

              <div className="rounded-xl border border-destructive/30 bg-destructive/5 p-6">
                <h3 className="text-lg font-semibold text-destructive">Danger Zone</h3>
                <p className="mt-2 text-sm text-muted-foreground">Permanently delete your account and all data.</p>
                <button className="mt-4 rounded-lg bg-destructive px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-destructive/90">
                  Delete account
                </button>
              </div>
            </div>
          )}

          {activeTab === "Notifications" && (
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">Notification Preferences</h3>
              <div className="mt-4 space-y-4">
                {[
                  { label: "Trip reminders", desc: "Get notified before upcoming trips." },
                  { label: "Collaboration updates", desc: "When someone edits a shared trip." },
                  { label: "New features", desc: "Be the first to know about new features." },
                  { label: "Weekly digest", desc: "A summary of your trip activity." },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" defaultChecked className="peer sr-only" />
                      <div className="h-6 w-11 rounded-full bg-border peer-checked:bg-primary peer-focus:ring-2 peer-focus:ring-primary/20 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-full"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Privacy" && (
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">Privacy Settings</h3>
              <div className="mt-4 space-y-4">
                {[
                  { label: "Public profile", desc: "Allow others to see your profile." },
                  { label: "Share trip stats", desc: "Show your travel stats publicly." },
                  { label: "Location sharing", desc: "Share your current location on trips." },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.label}</p>
                      <p className="text-xs text-muted-foreground">{item.desc}</p>
                    </div>
                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" />
                      <div className="h-6 w-11 rounded-full bg-border peer-checked:bg-primary peer-focus:ring-2 peer-focus:ring-primary/20 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:after:translate-x-full"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "Integrations" && (
            <div className="rounded-xl border border-border bg-card p-6">
              <h3 className="text-lg font-semibold text-foreground">Connected Services</h3>
              <div className="mt-4 space-y-4">
                {[
                  { name: "Google Maps", status: "Connected", connected: true },
                  { name: "Spotify", status: "Not connected", connected: false },
                  { name: "Weather API", status: "Connected", connected: true },
                ].map((item) => (
                  <div key={item.name} className="flex items-center justify-between rounded-lg border border-border p-4">
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                      <p className="text-xs text-muted-foreground">{item.status}</p>
                    </div>
                    <button className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
                      item.connected
                        ? "border border-border text-foreground hover:bg-muted"
                        : "bg-primary text-white hover:bg-primary-dark"
                    }`}>
                      {item.connected ? "Disconnect" : "Connect"}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
