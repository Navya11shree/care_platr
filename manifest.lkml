project_name: "care_platr"

application: care_platr {
  label: "care_platr"
  url: "https://localhost:8080/bundle.js"  # Update to your production URL
  # file: "bundle.js"  # Uncomment if using file reference instead of URL
  entitlements: {
    core_api_methods: ["me", "folders"]  # Include necessary API methods
    use_embeds: yes

  }
}
