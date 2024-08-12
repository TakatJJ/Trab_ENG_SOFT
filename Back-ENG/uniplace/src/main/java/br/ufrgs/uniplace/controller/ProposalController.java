package br.ufrgs.uniplace.controller;

import br.ufrgs.uniplace.model.Proposal;


import org.springframework.web.bind.annotation.*;
import org.springframework.http.ResponseEntity;

import br.ufrgs.uniplace.service.ProposalService;
import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@RequestMapping("/proposals")
public class ProposalController{
    private final ProposalService proposalService;


    @PutMapping
    public Proposal UpdateProposta(@RequestBody Proposal new_proposal){
        Proposal proposal = proposalService.findProposalByidProposal(new_proposal.getIdProposal());
        proposal.setState(new_proposal.getState());
        return proposalService.saveProposal(proposal);
    }

    @PostMapping
    public ResponseEntity<Proposal> PostProposta(@RequestBody Proposal proposta){
        Proposal savedEntity = proposalService.saveProposal(proposta);
        return ResponseEntity.ok(savedEntity);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> DeleteProposta(@PathVariable Long id){
        proposalService.deleteProposal(id);
        return ResponseEntity.ok().build();
    }


}


